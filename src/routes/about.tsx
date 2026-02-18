import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<main className='min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-24'>
				{/** Glow */}
				<div aria-hidden className='pointer-events-none absolute inset-0' />
				<div className='relative z-10 max-w-lg w-full text-center space-y-4'>
					{/** Page label */}
					<p className='text-md font-mono tracking-normal uppercase text-[--color-sage]'>
						About
					</p>

					<h1 className='font-display text-5xl font-light text-[--color-text-primary] leading-tight'>
						Under <em className='text-[--color-amber] italic'>construction</em>
					</h1>
				</div>
			</main>
		</>
	);
}
