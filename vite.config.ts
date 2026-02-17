// vite.config.ts
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tsConfigPaths(),
		mdx(),
		tanstackStart(),
		netlify(),
		tailwindcss(),
		// react's vite plugin must come after start's vite plugin
		viteReact(),
	],
});
