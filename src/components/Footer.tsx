import { GitBranchIcon } from "lucide-react";

export default function Footer() {
	const currentDate = new Date().getFullYear();

	return (
		<>
			<footer className='relative border-t border-border bg-surface'>
				<div
					aria-hidden='true'
					className='pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber/50 to-transparent'
				/>
				<div
					aria-hidden='true'
					className='pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-amber/10 to-transparent'
				/>
				<div className='relative max-w-5xl z-10 mx-auto px-4 py-8'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
						<div className='leading-tight'>
							<div className='text-base font-semibold text-text-primary'>
								TokiLoshi.xyz
							</div>
						</div>
						<div className='flex flex-col gap-3 text-sm text-text-secondary md:items-end'>
							<a
								className='inline-flex items-center gap-2 transition-colors hover:text-amber'
								href='https://github.com/TokiLoshi'
								target='_blank'
								rel='noopener noreferrer'>
								{" "}
								GitHub
								<GitBranchIcon size={16} />
							</a>
							<div className='text-text-muted'>
								&copy; {currentDate} coded with chaos and curiosity by{" "}
								<a
									href='https://github.com/TokiLoshi'
									target='_blank'
									rel='noopener noreferrer'
									className='ml-1 text-amber transition-colors hover:text-amber-dim'>
									TokiLoshi
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
