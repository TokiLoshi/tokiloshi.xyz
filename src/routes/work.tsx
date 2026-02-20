import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
});

const projects = [
	{
		name: "Cozy Chapter",
		description: "3D personal media tracker and plant watering tracker",
		stack: [
			"Tanstack start",
			"R3 Fiber",
			"Drizzle",
			"Better auth",
			"Typescript",
			"Tailwind",
			"Zod",
			"Neon Postgres",
			"Netlify",
		],
		imagePath: "",
		url: "",
	},
	{
		name: "Pitaya Tracker",
		description:
			"Inventory, variant and export tracker, with data visualization for a Fruit farm",
		stack: [
			"Next-js",
			"Next-auth",
			"Typescript",
			"Neon Postgres",
			"Tailwind",
			"R3 Fiber",
			"Drizzle",
			"Zod",
			"Neon Postgres",
			"Vercel",
		],
		imagePath: "",
		url: "",
	},
	{
		name: "Castle Capers",
		description: "Mini 3D Murder mystery game",
		stack: ["R3 Fiber", "Drei", "Zustand", "Vercel"],
		imagePath: "",
		url: "",
	},
	{
		name: "Island Hopper",
		description:
			"Mapbox experiment exploring places around the world with animated characters as guides",
		stack: [
			"Next.js",
			"R3 Fiber",
			"Drei",
			"Mapbox",
			"Postprocessing",
			"GLSL",
			"Zustand",
			"Vercel",
		],
		imagePath: "",
		url: "",
	},
	{
		name: "Codemon",
		description:
			"A JRPG battle game with a coding theme, collaboration for Little Shop of Chaos a 3day hackathon - 2nd place winners",
		stack: ["Phaser", "MongoDB", "Vercel", "Typescript", "Express"],
		imagePath: "",
		url: "",
	},
];

function RouteComponent() {
	return (
		<>
			<div className='h-screen max-w-180 mx-auto px-6 p-16 pb-32'>
				{/** Header */}
				<div className='mb-14'>
					<span className='text-sm font-light tracking-wide text-amber'>
						Work
					</span>
					<div className='flex items-center gap-6 mt-5'>
						<div className='w-20 h-20 rounded-full bg-surface-2 border-2 border-border flex items-center justify-center shrink-0 overflow-hidden'>
							<span className='text-3xl'>💼</span>
						</div>
						<h1 className='text-2xl md:text-5xl font-light font-display text-text-primary leading-tight'>
							Selected works
						</h1>
					</div>
					<p className=' mt-2 font-light text-sm leading-relaxed text-text-primary'>
						This is a selection of my current works and recent projects.
					</p>
				</div>

				{/** Works */}
				<div className='bg-surface border mt-3 border-border rounded-lg p-7 mb-14'>
					{projects.map((project, i) => (
						<>
							<div className='text-xs font-normal text-amber tracking-widest uppercase mb-4'>
								{project.name}
							</div>
							<ul className='space-y-2.5' key={i}>
								<li
									key={`${i}-${project.description}`}
									className='text-text-secondary text-md font-light pl-5 relative'>
									<span className='absolute left-0 text-text-muted'>→</span>
									{project.description}
								</li>
							</ul>
						</>
					))}
				</div>
			</div>
		</>
	);
}
