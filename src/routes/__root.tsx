/// <reference types='vite/client' />;
import { useState, type ReactNode } from "react";
import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import appCss from "../styles/app.css?url";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { Analytics } from "@/components/PostHogAnalytics";

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
	const [queryClient] = useState(() => new QueryClient());
	return (
		<html>
			<head>
				<HeadContent />
			</head>

			<body className='bg-canvas text-text-primary font-mono antialiased'>
				<QueryClientProvider client={queryClient}>
					<Analytics />
					<Toaster />
					{children}
				</QueryClientProvider>

				<Scripts />
			</body>
		</html>
	);
}
