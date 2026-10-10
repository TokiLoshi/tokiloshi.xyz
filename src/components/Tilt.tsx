import { useRef } from "react";
import type { ReactNode } from "react";

const MAX_TILT = 6;

export default function Tilt({ children }: { children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);

	const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const element = ref.current;
		if (!element) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const rectangle = element.getBoundingClientRect();
		const x = ((e.clientX - rectangle.left) / rectangle.width) * 2 - 1;
		const y = ((e.clientY - rectangle.top) / rectangle.height) * 2 - 1;

		element.style.setProperty("--rx", `${-y * MAX_TILT}deg`);
		element.style.setProperty("--ry", `${x * MAX_TILT}deg`);
		// element.style.setProperty("--mx", `${(x + 1) * 50}%`);
		// element.style.setProperty("--my", `${(y + 1) * 50}%`);
	};

	const handleLeave = () => {
		ref.current?.style.setProperty("--rx", "0deg");
		ref.current?.style.setProperty("--ry", "0deg");
	};

	return (
		<>
			<div
				className='transition-transform duration-200 ease-out'
				ref={ref}
				onPointerMove={handleMove}
				onPointerLeave={handleLeave}
				style={{
					transform:
						"perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
				}}>
				{children}
			</div>
		</>
	);
}
