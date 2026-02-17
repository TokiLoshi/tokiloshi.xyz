import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
	HomeIcon,
	Menu,
	NotebookPen,
	User,
	Mail,
	Briefcase,
	XIcon,
	GitBranchIcon,
} from "lucide-react";

const navItemBase =
	"flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white font-medium transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	// Close on Escape
	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") setIsOpen(false);
		}
		if (isOpen) window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen]);

	return (
		<>
			<header className='sticky top-0 z-40 border-b border-emerald-500 bg-slate-800/80 backdrop-blur supports-backdrop-filter:bg-slate-950/90'>
				<div className='mx-auto flex h-14 max-w-5xl items-center gap-3 px-4'>
					<button
						onClick={() => setIsOpen(true)}
						aria-label='Open menu'
						className='rounded-xl p-2 transition text-white hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30'>
						<Menu size={22} className='text-white' />
					</button>
					<Link to='/' className='flex items-center gap-2'>
						{/** Avatar placeholder */}
						<div className='h-8 w-8 rounded-xl bg-linear-to-br from-violet-400/60 to-cyan-400/60 ring-1 ring-white/10' />
						<div className='text-sm font-semibold text-white'>TokiLoshi</div>
						<div className='text-[11px] text-white/60'>
							creative dev • web + 3D
						</div>
					</Link>
					<div className='ml-auto flex items-center gap-2'>
						{/** Small links can go here */}
					</div>
				</div>
			</header>

			{/** Backdrop */}
			{isOpen && (
				<button
					aria-label='Close menu'
					onClick={() => setIsOpen(false)}
					className='fixed inset-0 z-40 cursor-default bg-black/50 backdrop-blur-sm'
				/>
			)}

			{/** Drawer */}
			<aside
				className={`fixed left-0 top-0 z-50 h-full w-80 border-r border-white/10 bg-slate-950/85 backdrop-blur transform transition-transform duration-300 ease-out  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
				<div className='flex text-white items-center justify-between px-4 py-3'>
					<h3>Menu</h3>
					<button
						onClick={() => setIsOpen(false)}
						aria-label='Close menu'
						className='rounded-xl p-2 transition text-white hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30'>
						<XIcon size={20} />
					</button>
				</div>

				<nav className='px-3 pb-6'>
					<Link
						to='/'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navItemBase + " bg-white/10 ring-1 ring-white/10",
						}}>
						<HomeIcon size={18} />
						Home
					</Link>
					<Link
						to='/work'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navItemBase + " bg-white/10 ring-1 ring-white/10",
						}}>
						<Briefcase size={18} />
						Work
					</Link>
					<Link
						to='/devlog/welcome'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navItemBase + " bg-white/10 ring-1 ring-white/10",
						}}>
						<NotebookPen size={18} />
						Devlog
					</Link>
					<Link
						to='/about'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navItemBase + " bg-white/10 ring-1 ring-white/10",
						}}>
						<User size={18} />
						About
					</Link>
					<Link
						to='/contact'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navItemBase + "bg-white ring-1 ring-white/10",
						}}>
						<Mail size={18} />
						Contact
					</Link>
					<div className='mt-4 border-t border-white/10 pt-4'>
						<a
							href='https://github.com/TokiLoshi'
							target='_blank'
							rel='noreferrer'
							className={`${navItemBase} text-white/80`}>
							<GitBranchIcon size={18} />
							GitHub
						</a>
					</div>
				</nav>
			</aside>
		</>
	);
}
