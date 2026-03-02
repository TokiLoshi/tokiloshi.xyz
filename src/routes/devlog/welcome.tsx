import { createFileRoute } from "@tanstack/react-router";
// @ts-expect-error mdx frontmatter is injected by remark-mdx-frontmatter
import Welcome, { frontmatter } from "../../content/welcome.mdx";
// eslint-disable-next-line
import Refactor, {
	frontmatter as frontmatterR,
} from "../../content/refactor.mdx";
import { TerminalPost } from "@/components/TerminalPost";

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
						{/** Refactor Post */}
						<TerminalPost
							path='tokiloshi.xyz / devlog / refactoringPains'
							title={frontmatterR.title}
							date={frontmatterR.date}
							summary={frontmatterR.summary}>
							<Refactor />
						</TerminalPost>
						<div className='m-2' />
						{/** Welcome Post */}
						<TerminalPost
							path='tokiloshi.xyz / devlog / welcome'
							title={frontmatter.title}
							date={frontmatter.date}
							summary={frontmatter.summary}>
							<Welcome />
						</TerminalPost>
					</div>
				</div>
			</div>
		</>
	);
}
