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
	"flex items-center gap-3 rounded-xl font-mono px-3 py-2.5 mb-2 text-sm text-secondary transition-all duration-200 hover:bg-surface-2 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-border-light";

const navActive = navItemBase + " bg-surface-2 ring-1 ring-border-light";

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
			<header className='sticky top-0 z-40 h-20 border-b border-border bg-surface/80 backdrop-blur supports-backdrop-filter:bg-surface/70'>
				<div className='mx-auto flex h-14 max-w-5xl items-center gap-3 px-4'>
					<button
						onClick={() => setIsOpen(true)}
						aria-label='Open menu'
						className='rounded p-2 cursor-pointer transition text-color-text-secondary 
            hover:bg-color-surface-2 hover:text-text-primary 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-border-light'>
						<Menu size={22} />
					</button>
					<Link to='/' className='flex items-center gap-3'>
						{/** Avatar placeholder */}
						<div className='h-9 w-9 overflow-hidden rounded-lg ring-1 ring-border-light bg-linear-to-br from-sage to-amber/35'>
							<img
								src='/favicons/xyz.png'
								alt='Bee / Toki'
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='leading-tight'>
							<div className='text-amber font-semibold '>TokiLoshi</div>
							<div className='text-md text-text-secondary'>
								creative developer • web + 3D
							</div>
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
					className='fixed inset-0 z-40 cursor-default bg-black/55 backdrop-blur-sm'
				/>
			)}

			{/** Drawer */}
			<aside
				className={`fixed left-0 top-0 z-50 h-full w-80 border-r border-[--color-border] bg-[--color-surface]/90 backdrop-blur transform transition-transform duration-300 ease-out  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
				<div className='flex items-center justify-between px-4 py-3'>
					<h3 className='text-sm font-semibold text-[--color-text-primary]'>
						Menu
					</h3>
					<button
						onClick={() => setIsOpen(false)}
						aria-label='Close menu'
						className='rounded-xl cursor-pointer p-2 transition text-[--color-text-secondary] hover:bg-[--color-surface-2] hover:text-[--color-text-primary] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-border-light]'>
						<XIcon size={20} />
					</button>
				</div>

				<nav className='px-3 pb-6'>
					<Link
						to='/'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navActive,
						}}>
						<HomeIcon size={18} />
						Home
					</Link>
					<Link
						to='/work'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navActive,
						}}>
						<Briefcase size={18} />
						Work
					</Link>
					<Link
						to='/devlog/welcome'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navActive,
						}}>
						<NotebookPen size={18} />
						Devlog
					</Link>
					<Link
						to='/about'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navActive,
						}}>
						<User size={18} />
						About
					</Link>
					<Link
						to='/contact'
						onClick={() => setIsOpen(false)}
						className={navItemBase}
						activeProps={{
							className: navActive,
						}}>
						<Mail size={18} />
						Contact
					</Link>
					<div className='mt-4 border-t border-[--color-border] pt-4'>
						<a
							href='https://github.com/TokiLoshi'
							target='_blank'
							rel='noreferrer'
							className={navItemBase}>
							<GitBranchIcon size={18} />
							GitHub
						</a>
					</div>
				</nav>
			</aside>
		</>
	);
}
