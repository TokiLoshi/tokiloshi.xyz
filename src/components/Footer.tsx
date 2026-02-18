import { Link } from "@tanstack/react-router";
import { GitBranchIcon } from "lucide-react";

export default function Footer() {
	const currentDate: Date = new Date();
	const currentYear: number = currentDate.getFullYear();
	return (
		<>
			<footer className='bg-gray-900 border-t border-gray-800'>
				<div className='max-w-7xl mx-auto px-6 py-8'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
						<div className='flex items-center gap-3'>
							<img
								src='/GPTAvatar.png'
								alt='GPT Avatar'
								className='h-8 rounded-xl'
							/>
							<span className='text-lg font-semibold text-white'>
								TokiLoshi.xyz
							</span>
						</div>
						<div className='text-gray-400 text-sm'>
							&copy; {currentYear} coded with chaos and curiosity by
							<span className='text-gray-400 hover:text-cyan-400 transition-colors'>
								<a
									className='underline-none text-cyan-400'
									href='https://github.com/TokiLoshi'
									target='_blank'
									rel='noopener noreferrer'>
									{" "}
									TokiLoshi
								</a>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
