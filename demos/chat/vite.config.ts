import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const getBase = () => {
    if (process.env.GITHUB_REPOSITORY) {
        const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
        return `/${repo}/chat/`;
    }
    return "/";
};

const base = getBase();

// https://vitejs.dev/config/
export default defineConfig({
    base,
    plugins: [react()],
    resolve: {
        alias: {
            "@borgtj/react": resolve(__dirname, "../../packages/react/src"),
            "@borgtj/chat": resolve(__dirname, "../../packages/chat/src"),
            "@": resolve(__dirname, "../../packages/react/src"),
        },
    },
    optimizeDeps: {
        exclude: ["@borgtj/react", "@borgtj/chat"],
    },
});
