import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
});

const projects = [
	{
		name: "Cozy Chapter",
		description:
			"A 3D personal media tracker and plant watering app — because my growing collection of Dracaena demanded better record-keeping.",
		stack: [
			"Tanstack start",
			"R3F",
			"Drizzle",
			"Better Auth",
			"TypeScript",
			"Tailwind",
			"Zod",
			"Neon Postgres",
			"Netlify",
		],
		imagePath: "",
		url: "",
		status: "In progress",
	},
	{
		name: "Pitaya Tracker",
		description:
			"A farm management system for a dragon fruit farm in Mozambique — tracking 200+ variants, flowering cycles, taste profiles, and international exports.",
		stack: [
			"Next.js",
			"NextAuth",
			"TypeScript",
			"Neon Postgres",
			"Tailwind",
			"R3F",
			"Drizzle",
			"Zod",
			"Vercel",
		],
		imagePath: "",
		url: "",
	},
	{
		name: "Castle Capers",
		description:
			"A mini 3D murder mystery game — explore a castle, find clues, and figure out whodunit.",
		stack: ["R3F", "Drei", "Zustand", "Vercel"],
		imagePath: "",
		url: "",
	},
	{
		name: "Island Hopper",
		description:
			"Mapbox experiment exploring places around the world with animated characters as guides.",
		stack: [
			"Next.js",
			"R3F",
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
			"A JRPG battle game with a coding theme — built in 3 days as a collaboration for Little Shop of Chaos - 2nd place Boot.dev hackathon winners",
		stack: ["Phaser", "MongoDB", "Express", "Typescript", "Vercel"],
		imagePath: "",
		url: "",
		badge: "🏆",
	},
	{
		name: "Peaks and Beaks",
		description:
			"Strava meets tracking the species you've seen out on a walkabout, run, or row so I could appreciate the urban wildlife and watch personal mileage accrue.",
		stack: [
			"Django",
			"GeoDjango",
			"Postgres",
			"S3",
			"Heroku",
			"sendgrid",
			"whitenoise",
		],
		imagePath: "",
		url: "",
	},
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
	return (
		<>
			<div className='group bg-surface border border-border rounded-lg overflow-hidden transition-colors hover:border-border-light'>
				{/** Image placeholder */}
				<div className=' w-full overflow-hidden'>
					{project.imagePath ? (
						<img
							src={project.imagePath}
							alt={project.name}
							className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
						/>
					) : (
						<div className='aspect-video w-full bg-surface-2 flex items-center justify-center'>
							<span className='text-text-muted text-xs tracking-wide'>
								Screenshot coming soon
							</span>
						</div>
					)}
				</div>

				{/** Content */}
				<div className='p-6'>
					{/** Title */}
					<div className='flex items-start justify-between gap-3 mb-3'>
						<h2 className='text-lg font-display font-light text-text-primary'>
							{project.name}
						</h2>
						<div className='flex items-center gap-2 shrink-0'>
							{project.badge && (
								<span className='text-md font-normal text-amber bg-amber-glow px-2 py-1 rounded-full whitespace-nowrap'>
									{project.badge}
								</span>
							)}
							{project.status && (
								<span className='text-md font-normal text-sage bg-sage/10 px-2 py-1 rounded-full whitespace-nowrap'>
									{project.status}
								</span>
							)}
						</div>
					</div>
					{/** Description */}
					<p className='text-md text-text-secondary font-light leading-relaxed mb-4'>
						{project.description}
					</p>
					{/** Stack tags */}
					<div className='flex flex-wrap gap-1.5'>
						{project.stack.map((tool) => (
							<span
								key={tool}
								className='inline-flex items-center rounded-md px-2 py-0.5 text-xs font-normal bg-surface-2/60 text-text-secondary border border/70 transition hover:text-text-primary hover:bg-amber-glow'>
								{tool}
							</span>
						))}
					</div>
				</div>

				{project.url && (
					<a
						href={project.url}
						target='_blank'
						rel='noopener noreferrer'
						className='block'>
						Link
					</a>
				)}
			</div>
		</>
	);
}

function RouteComponent() {
	return (
		<>
			<div className='mx-auto px-6 pt-16 pb-32'>
				{/** Header */}
				<div className='mb-14'>
					<span className='text-sm font-light tracking-wide text-amber'>
						Work
					</span>
					<div className='flex items-center gap-6 mt-5'>
						<h1 className='text-4xl md:text-5xl font-light font-display text-text-primary leading-tight mt-4'>
							Selected works
						</h1>
					</div>
					<p className=' mt-3 font-light text-sm leading-relaxed text-text-secondary max-w-lg'>
						A selection of things I've built recently — from full-stack apps to
						small games to creative experiments.
					</p>
				</div>

				{/** Project grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>
			</div>
		</>
	);
}
