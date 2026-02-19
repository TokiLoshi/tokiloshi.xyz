import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className='min-h-screen bg-canvas px-4 py-12'>
				<div className='mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-2'>
					{/** Left info */}
					<section className='space-y-4'>
						<h1 className='font-display text-3xl text-text-primary'>Contact</h1>
						<p className='text-sm text-text-secondary'>
							Want to collaborate, work with me or just chat creative dev and
							3D? Send me a note
						</p>
						<div className='rounded-lg border border-border bg-surface p-4'>
							<div className='text-xs uppercase tracking-wide text-text-muted'>
								Elsewhere
							</div>
							<div className='mt-3 flex flex-col gap-2 text-sm'>
								<a
									className='text-text-secondary transition-colors hover:text-amber'
									href='https://x.com/3DBeeing'
									target='_blank'
									rel='noopener noreferrer'>
									X / @3DBeeing
								</a>
								<a
									className='text-text-secondary transition-colors hover-text-amber'
									href='https://github.com/TokiLoshi'
									target='_blank'
									rel='noopener noreferrer'></a>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
