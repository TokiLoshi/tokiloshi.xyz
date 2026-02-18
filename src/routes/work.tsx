import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className='min-h-screen bg-slate-900/80 flex flex-col items-center justify-center px-6'>
				<h1 className='text-emerald-500'>Work</h1>
				<p className='text-emerald-300'>Under construction 🚧</p>
			</div>
		</>
	);
}
