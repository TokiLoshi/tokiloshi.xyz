// import { type ReactNode, useEffect, useMemo, useState } from "react";
// import posthog from "posthog-js";
// import { useRouterState } from "@tanstack/react-router";

// const options = {
// 	api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
// 	// PostHog "SDK defaults" helper (optional)
// 	defaults: "2026-01-30",
// 	capture_pageview: false,
// 	capture_pageleave: true,
// } as const;

// export function PostHogAnalyticsProvider({
// 	children,
// }: {
// 	children: ReactNode;
// }) {
// 	// rerenders when route changes
// 	const href = useRouterState({ select: (s) => s.location.href });
//   const [ PostHogProvider, setPostHogProvider ] = useState<null || React.ComponentType<any>>(null)
// 	useEffect(() => {
// 		if (typeof window === "undefined") return;
// 		if (!posthog.__loaded) return;
// 		posthog.capture("$pageview");
// 	}, [href]);

// 	// During SSR render children, no provider
// 	if (typeof window === "undefined") return <>{children}</>;

// 	const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string | undefined;
// 	if (!apiKey) {
// 		console.error("PostHog API Key missing!");
// 		return <>{children}</>;
// 	}

// 	return <PostHogProvider apiKey={apiKey}>{children}</PostHogProvider>;
// }
import { useEffect } from "react";
import posthog from "posthog-js";
import { useRouterState } from "@tanstack/react-router";

export function Analytics() {
	const href = useRouterState({ select: (s) => s.location.href });

	// init once (client only)
	useEffect(() => {
		if (typeof window === "undefined") return;

		const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as
			| string
			| undefined;
		const host = import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string | undefined;

		if (!apiKey) return;

		posthog.init(apiKey, {
			api_host: host ?? "https://app.posthog.com",
			defaults: "2026-01-30",
			capture_pageview: false,
			capture_pageleave: true,
		});

		// capture initial load
		posthog.capture("$pageview");
	}, []);

	// capture SPA navigations
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (!posthog.__loaded) return;

		posthog.capture("$pageview");
	}, [href]);

	return null;
}
