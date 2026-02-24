import { type ReactNode, useEffect } from "react";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";
import { useRouterState } from "@tanstack/react-router";

const options = {
	api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
	// PostHog "SDK defaults" helper (optional)
	defaults: "2026-01-30",
	capture_pageview: false,
	capture_pageleave: true,
} as const;

export function PostHogAnalyticsProvider({
	children,
}: {
	children: ReactNode;
}) {
	// rerenders when route changes
	const href = useRouterState({ select: (s) => s.location.href });
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (!posthog.__loaded) return;
		posthog.capture("$pageview");
	}, [href]);

	// During SSR render children, no provider
	if (typeof window === "undefined") return <>{children}</>;

	const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string | undefined;
	if (!apiKey) {
		console.error("PostHog API Key missing!");
		return <>{children}</>;
	}

	return <PostHogProvider apiKey={apiKey}>{children}</PostHogProvider>;
}
