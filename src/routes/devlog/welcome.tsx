import { createFileRoute } from "@tanstack/react-router";
import Welcome from "../../content/welcome.mdx";

export const Route = createFileRoute("/devlog/welcome")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<main className='mx-auto max-w-2xl px-6 py-16 prose prose-invert'>
				<Welcome />
			</main>
		</>
	);
}
