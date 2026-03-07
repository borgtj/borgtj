import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
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
