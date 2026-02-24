import { createFileRoute } from "@tanstack/react-router";
import Welcome from "../../content/welcome.mdx";
import frontmatter from "../../content/welcome.mdx";

export const Route = createFileRoute("/devlog/welcome")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className='min-h-screen bg-canvas'>
				<div className='mx-auto max-w-5xl px-6 pt-16 pb-28'>
					{/** Hero */}
					<div className='mx-auto max-w-5xl px-6 pt-16 pb-28'>
						<div className='mb-10'>
							<div className='flex items-center gap-3'>
								<span className='text-sm font-light tracking-wide text-amber'>
									Devlog
								</span>
								<span className='text-xs text-sage bg-sage/10 px-2 py-1 rounded-full border border-border/70'>
									Under construction 🚧
								</span>
							</div>
							<h1 className='mt-5 text-4xl md:text-5xl font-light font-display text-text-primary leading-tight'>
								(Mis)Adventuring in 3D - sometimes things go KABOOM
							</h1>
							<p className='mt-3 text-sm font-light leading-relaxed text-text-secondary max-w-2xl'>
								Notes from building playful projects in 3D, learning in public,
								and embracing the inevitable creep of scope.
							</p>
						</div>
						<article className='relative overflow-hidden rounded-xl border border-border bg-surface shadow-[0_12px_40px_rgba(0, 0, 0, 0.35)]'>
							{/** Top bar */}
							<div className='flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2/60'>
								<div className='flex items-center gap-2'>
									<span className='h-2.5 w-2.5 rounded-full bg-border-light/70' />
									<span className='h-2.5 w-2.5 rounded-full bg-border-light/50' />
									<span className='h-2.5 w-2.5 rounded-full bg-border-light/30' />
								</div>
								<div className='text-xs text-text-muted'>
									toki.xyz / devlog / welcome
								</div>
							</div>

							{/** Content */}
							<div className='px-6 py-10'>
								<div className=''>
									<Welcome />
								</div>
							</div>
							<div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas/25' />
						</article>
					</div>
				</div>
			</div>
		</>
	);
}
