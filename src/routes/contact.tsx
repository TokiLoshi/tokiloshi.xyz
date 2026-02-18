import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createFileRoute("/contact")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className='min-h-screen flex flex-col items-center justify-center px-6'>
				<h1 className='text-emerald-500'>Contact</h1>
				<p className='text-emerald-300'>Under construction 🚧</p>
			</div>
		</>
	);
}
