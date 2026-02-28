import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const getBase = () => {
    if (process.env.GITHUB_REPOSITORY) {
        const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
        return `/${repo}/`;
    }
    return "/";
};

const base = getBase();

// https://vite.dev/config/
export default defineConfig({
    base,
    plugins: [
        react(),
        // 构建时把 index.html 里绝对路径的静态资源加上 base，避免 GitHub Pages 子路径下 404
        {
            name: "html-base",
            transformIndexHtml(html) {
                return html.replace(
                    /(href|src)="\/(?!\/)([^"]+\.(svg|png|ico|webp))/g,
                    (_, attr, path) => `${attr}="${base}${path}"`
                );
            },
        },
    ],
    resolve: {
        dedupe: ["react", "react-dom"],
    },
});
