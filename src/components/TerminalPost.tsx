import type { ReactNode } from "react";

export function TerminalPost({
	path,
	title,
	date,
	summary,
	children,
}: {
	path: string;
	title?: string;
	date?: string;
	summary?: string;
	children: ReactNode;
}) {
	return (
		<article className='relative overflow-hidden rounded-xl border border-border bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.35)]'>
			{/** Top bar */}
			<div className='flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2/60'>
				<div className='flex items-center gap-2'>
					<span className='h-2.5 w-2.5 rounded-full bg-border-light/70' />
					<span className='h-2.5 w-2.5 rounded-full bg-border-light/50' />
					<span className='h-2.5 w-2.5 rounded-full bg-border-light/30' />
				</div>
				<div className='text-xs text-text-muted'>{path}</div>
			</div>
			{/** Content */}
			<div className='px-6 py-10'>
				{(title || date || summary) && (
					<header className='mb-8'>
						{date && <div className='text-xs text-text-muted'>{date}</div>}
						{title && (
							<div className='m-1 font-display font-light text-2xl text-text-primary'>
								{title}
							</div>
						)}
						{summary && (
							<p className='mt-2 text-sm text-text-secondary max-w-2xl'>
								{summary}
							</p>
						)}
					</header>
				)}
				{/** MDX */}
				<div className='prose prose-inverted max-w-none'>{children}</div>
			</div>
		</article>
	);
}
