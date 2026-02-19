import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { sendMessage } from "../lib/server/message";

export const Route = createFileRoute("/contact")({
	component: RouteComponent,
});

function RouteComponent() {
	const [success, setSuccess] = useState(false);

	const addMutation = useMutation({
		mutationFn: (values: any) => sendMessage({ data: values }),
		onSuccess: () => {
			console.log("ADDing mutation: ");
			setSuccess(true);
		},
	});

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
									className='text-text-secondary transition-colors hover:text-amber'
									href='https://github.com/TokiLoshi'
									target='_blank'
									rel='noopener noreferrer'>
									GitHub / TokiLoshi
								</a>
							</div>
						</div>
					</section>
					{/** Right: form card */}
					<section className='rounded-lg border border-border bg-surface p-6'>
						<h2 className='text-base font-semibold text-text-primary'>
							Send a message
						</h2>
						<p className='mt-1 text-sm text-text-secondary'>
							I try to respond quickly (WIP under construction)
						</p>
						<div className='mt-6'>
							{/** Form */}
							{success ? (
								<div className='text-text-primary'>
									Thanks! Your message was sent.
								</div>
							) : (
								<button
									className='rounded-lg cursor-pointer bg-amber px-4 py-2 text-text-primary'
									onClick={() => {
										console.log("Button clicked, applying mutation");
										addMutation.mutate({
											name: "Testing chaos",
											email: "text@gmail.com",
											message: "This is a message of chaos",
										});
									}}
									disabled={addMutation.isPending}>
									{addMutation.isPending ? "Sending..." : "Send"}{" "}
								</button>
							)}
							{addMutation.isError && (
								<p className='mt-3 text-sm text-blush'>
									Something went wrong. Please try again later.{" "}
									{addMutation.data}
								</p>
							)}
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
