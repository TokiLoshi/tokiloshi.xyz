/// <reference types='vite/client' />;
import type { ReactNode } from "react";
import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import appCss from "../styles/app.css?url";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ title: "TokiLoshi.xyz" },
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<div className='min-h-dvh'>
				<Header />
				<main className='mx-auto max-w-5xl px-4 py-10'>
					<Outlet />
				</main>
				<Footer />
			</div>
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body className='bg-[--color-canvas] text-[--color-primary] font-mono antialiased'>
				{children}

				<Scripts />
			</body>
		</html>
	);
}
