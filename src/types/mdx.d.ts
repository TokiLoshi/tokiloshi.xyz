// declare module "*.mdx" {
// 	import type { ComponentType } from "react";

// 	// This is what remark-mdx-frontmatter generates as a JS export. :contentReference[oaicite:1]{index=1}
// 	export const frontmatter: {
// 		title: string;
// 		date: string;
// 		summary?: string;
// 		// optional: allow extra keys without fighting TS later
// 		[key: string]: unknown;
// 	};

// 	const MDXComponent: ComponentType<Record<string, unknown>>;
// 	export default MDXComponent;
// }

declare module "*.mdx" {
	export const frontmatter: {
		title: string;
		date: string;
		summary?: string;
		[key: string]: unknown;
	};

	const MDXComponent: import("react").ComponentType<any>;
	export default MDXComponent;
}
