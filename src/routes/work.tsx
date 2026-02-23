import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import { projects } from "@/lib/data/projects";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
});

function ProjectImage({ name, images }: { name: string; images?: string[] }) {
	const [first, second] = images ?? [];
	return (
		<>
			<div className='relative aspect-[16/10] w-full overflow-hidden bg-surface-2'>
				{!first ? (
					<div className='absolute inset-0 flex items-center justify-center'>
						<span className='text-text-muted text-xs tracking-wide'>
							Screenshot coming soon
						</span>
					</div>
				) : (
					<>
						<img
							src={first}
							alt={`${name} screenshot 1`}
							className='absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-101'
						/>
						{second && (
							<img
								src={second}
								alt={`${name} screenshot 2`}
								className='absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100'
							/>
						)}
						<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/30 via-transparent to-transparent' />
					</>
				)}
			</div>
		</>
	);
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
	const Wrapper = project.url ? "a" : "div";
	return (
		<>
			<Wrapper
				{...(project.url && {
					href: project.url,
					target: "_blank",
					rel: "noopener noreferrer",
				})}
				className='group bg-surface border border-border rounded-lg overflow-hidden transition duration-300 hover:translate-y-0.5 hover:border-border-light hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
				aria-laabel={project.url ? `Open ${project.name}` : undefined}>
				{/** Image placeholder */}
				<div className=' w-full overflow-hidden'>
					{project.imagePath ? (
						<ProjectImage name={project.name} images={project.imagePath} />
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
			</Wrapper>
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
						Some of the things I've been building — from full-stack apps to
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
