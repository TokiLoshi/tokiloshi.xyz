import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
	component: Home,
});

const phrases = [
	{ text: "...loading", color: "text-amber" },
	{ text: "kaboom...", color: "text-sage" },
	{ text: "retrying...", color: "text-text-secondary" },
	{ text: "...loading again...", color: "text-amber" },
	{ text: "brb caffeinating...", color: "text-amber-glow" },
	{ text: "kaboom...again..again", color: "text-sage" },
	{ text: "starting Fred again..", color: "text-amber" },
	{ text: "compiling....", color: "text-text-primary" },
	{ text: "...kaboom", color: "text-text-amber" },
];

function Home() {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % phrases.length);
		}, 1800);
	}, []);
	return (
		<>
			<div className='min-h-svh bg-canvas text-text-primary px-6 py-14'>
				<div className='max-w-180 mx-auto text-center'>
					<h1 className='text-2xl md:text-5xl font-light font-display text-text-primary leading-tight'>
						TokiLoshi.xyz
					</h1>
					<div className='relative mt-6 h-10'>
						<span
							key={index}
							className={`absolute left-1/2 -translate-x-1/2 text-xl transition-all duration-500 ease-in-out ${phrases[index].color}`}
							style={{
								transform: `translateX(-50%) translateY(${Math.random() * 6 - 3}px)`,
								letterSpacing: `${Math.random() * 2}px`,
							}}>
							{phrases[index].text}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
