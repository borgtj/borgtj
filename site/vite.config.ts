import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const getBase = () => {
    if (process.env.GITHUB_REPOSITORY) {
        const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
        return `/${repo}/`;
    }
    return "/";
};

// https://vite.dev/config/
export default defineConfig({
    base: getBase(),
    plugins: [react()],
    resolve: {
        dedupe: ["react", "react-dom"],
    },
});
