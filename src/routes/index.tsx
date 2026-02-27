import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Experience from "@/components/Experience";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: Home,
});

const phrases = [
	{ text: "...loading", color: "text-amber" },
	{ text: "firing up my dev env", color: "text-text-primary" },
	{ text: "kaboom...", color: "text-sage" },
	{ text: "retrying...", color: "text-text-secondary" },
	{ text: "...loading again...", color: "text-amber" },
	{ text: "brb caffeinating...", color: "text-amber-glow" },
	{ text: "starting up Fred again..", color: "text-amber" },
	{ text: "kaboom...again", color: "text-sage" },
	{ text: "compiling....", color: "text-text-primary" },
	{ text: "experience compiled", color: "text-text-amber-glow" },
	{
		text: "coded with curiosity",
		color: "text-amber",
	},
	{
		text: "and a touch of chaos",
		color: "text-amber-glow",
	},
];

function Home() {
	const [index, setIndex] = useState(0);
	const [jitter, setJitter] = useState({ y: 0, ls: 0 });

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % phrases.length);
		}, 1800);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setJitter({ y: Math.random() * 6 - 3, ls: Math.random() * 1.5 });
		});
	}, [index]);

	return (
		<>
			<div className='min-h-svh bg-canvas text-text-primary px-6 py-14'>
				<div className='max-w-180 mx-auto text-center'>
					<div className='mx-auto mb-10 h-56 w-full max-w-xl'>
						<Experience />
					</div>
					<h1 className='text-2xl md:text-5xl font-light font-display text-text-primary leading-tight'>
						TokiLoshi.xyz
					</h1>
					<div className='relative mt-6 h-10 overflow-hidden'>
						<span
							key={index}
							className={`absolute left-1/2 -translate-x-1/2 text-xl transition-all duration-500 ease-in-out ${phrases[index].color}`}
							style={{
								transform: `translateY(${jitter.y}px)`,
								letterSpacing: `${jitter.ls}px`,
							}}>
							{phrases[index].text}
						</span>
					</div>
					<div className='mt-6 flex justify-center'>
						<Button className='bg-amber text-text-primary rounded-lg'>
							<Link to='/work'>Explore my creative chaos</Link>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
