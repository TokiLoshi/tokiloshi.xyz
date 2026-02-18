import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<>
			<div className='min-h-screen bg-slate-900/80 flex flex-col items-center justify-center px-6'>
				<h1 className='text-2xl text-emerald-500'>TokiLoshi.xyz</h1>
				<h2 className='text-2xl text-emerald-400'>Life is more fun in 3D</h2>
				<p className='text-emerald-300'>Under construction 🚧</p>
			</div>
		</>
	);
}
