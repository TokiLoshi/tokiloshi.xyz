import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	const toolTags = [
		"Typescript",
		"React",
		"Next.js",
		"Tanstack Start",
		"Three.js",
		"R3F",
		"Python",
		"Django",
		"Go",
		"GLSL",
	];
	const currently = [
		"Building a 3D media and plant tracker with Tanstack Start (my plants demanded it)",
		"Working on a farm management system for a dragon fruit farm in Mozambique",
		"Working through the GPGPU lesson on Three.js journey",
		"Learning Go, GLSL and soon TSL",
	];
	return (
		<>
			<div className='max-w-180 mx-auto px-6 pt-16 pb-32'>
				{/* Avatar + Header */}
				<div className='mb-14'>
					<span className='text-sm font-light tracking-wide text-amber'>
						About
					</span>

					<div className='flex items-center gap-6 mt-5'>
						{/* Avatar placeholder */}
						<div className='w-20 h-20 rounded-full bg-surface-2 border-2 border-border flex items-center justify-center shrink-0 overflow-hidden'>
							{/* <img src="avatar.jpg" alt="Bee" className="w-full h-full object-cover" /> */}
							<span className='text-3xl'>🐝</span>
						</div>
						<h1 className='text-2xl md:text-5xl font-light font-display text-text-primary leading-tight'>
							Hi, I'm Bianca <span className='text-xl'>(TokiLoshi online)</span>
						</h1>
					</div>
				</div>

				{/* Intro */}
				<div className='space-y-5 mb-14'>
					<p className='font-light text-sm leading-relaxed text-text-primary'>
						I'm a{" "}
						<span className='text-sage font-normal'>creative developer</span>{" "}
						based in San Francisco building playful, immersive things on the
						web. I love <span className='text-sage font-normal'>Three.js</span>,
						I love being challenged by a good shader, and I think life is
						genuinely more fun in 3D.
					</p>

					<p className='font-light text-sm leading-relaxed text-text-primary'>
						I build full-stack apps, small games, and occasionally
						over-engineered personal tools. Before I found my way to
						development, I did a lot of other things: I started out as a{" "}
						<span className='text-amber font-normal'>journalist</span> in South
						Africa covering renewable energy and political affairs, got a
						Masters in international relations from{" "}
						<span className='text-amber font-normal'>Johns Hopkins SAIS</span>,
						ran my own company building apps for live events, worked in{" "}
						<span className='text-amber font-normal'>web3</span>, provided
						research colsulting for{" "}
						<span className='text-amber font-normal'>fintech</span> companies,
						and wore many hats including marketing, customer relationships and
						managing the founder at a{" "}
						<span className='text-amber font-normal'>sports nutrition</span>{" "}
						brand working with elite athletes.
					</p>

					<p className='font-light text-sm leading-relaxed text-text-primary'>
						The thread through all of it? I like solving interesting problems
						with people who care about what they're building. I'm especially
						drawn to work in{" "}
						<span className='text-sage font-normal'>climate tech</span> and{" "}
						<span className='text-sage font-normal'>nature conservation</span> —
						the natural world is endlessly fascinating and I'd love to build
						tools that help protect it.
					</p>
				</div>

				{/* Currently */}
				<div className='bg-surface border border-border rounded-lg p-7 mb-14'>
					<div className='text-xs font-normal text-amber tracking-widest uppercase mb-4'>
						Currently
					</div>
					<ul className='space-y-2.5'>
						{currently.map((item, i) => (
							<li
								key={i}
								className='text-text-secondary text-[13px] font-light pl-5 relative'>
								<span className='absolute left-0 text-text-muted'>→</span>
								{item}
							</li>
						))}
					</ul>
				</div>

				{/* Tools */}
				<div className='mb-14'>
					<p className='text-[13px] text-text-secondary font-light leading-relaxed mb-5'>
						I've shipped production apps across gaming, agriculture, internal
						tooling in web3, including a farm management system for a dragon
						fruit farm in Mozambique that replaced their entire spreadsheet
						workflow so they could spend more time with the plants and less on
						admin. I like making people's lives a little easier and more
						enjoyable.
					</p>

					<div className='flex flex-wrap gap-2'>
						{toolTags.map((tool) => (
							<span
								key={tool}
								className='text-xs font-normal text-sage bg-amber-glow border border-border px-3 py-1 rounded'>
								{tool}
							</span>
						))}
					</div>
				</div>

				{/* CTA */}
				<div className='pt-10 border-t border-border'>
					<p className='text-text-secondary text-sm font-light mb-6'>
						If you're building something interesting and think we'd work well
						together, I'd love to hear from you.
					</p>

					<div className='flex flex-wrap gap-3'>
						<a
							href='/contact'
							className='text-[13px] font-normal bg-amber text-canvas px-5 py-2 rounded-md hover:brightness-110 transition-all'>
							Say hi
						</a>
						<a
							href='https://github.com/TokilLoshi'
							target='_blank'
							rel='noopener noreferrer'
							className='text-[13px] font-normal text-sage px-5 py-2 rounded-md border border-border hover:bg-surface hover:border-border-light transition-colors'>
							GitHub
						</a>
						<a
							href='https://x.com/3DBeeing'
							target='_blank'
							rel='noopener noreferrer'
							className='text-[13px] font-normal text-sage px-5 py-2 rounded-md border border-border hover:bg-surface hover:border-border-light transition-colors'>
							@3DBeeing
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
