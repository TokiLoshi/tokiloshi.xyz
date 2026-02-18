import { createFileRoute } from "@tanstack/react-router";
import Welcome from "../../content/welcome.mdx";
import Header from "../../components/Header";

export const Route = createFileRoute("/devlog/welcome")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className='min-h-screen bg-slate-900/80 flex flex-col items-center justify-center px-6'>
				<h1 className='text-2xl text-emerald-500'>Devlog</h1>
				<h2 className='text-2xl text-emerald-400'>Life is more fun in 3D</h2>
				<p className='text-emerald-300'>Under construction 🚧</p>
				<main className='mx-auto max-w-2xl px-6 py-16 prose prose-invert text-emerald-500'>
					<Welcome />
				</main>
			</div>
		</>
	);
}
