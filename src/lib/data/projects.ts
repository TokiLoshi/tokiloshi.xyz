export type Project = {
	name: string;
	description: string;
	stack: string[];
	imagePath?: string[];
	url?: string;
	badge?: string;
	status?: string;
};

export const projects = [
	{
		name: "Watts for Dinner",
		description:
			"Your cheeky potato chef and coach. Watts reads your WHOOP recovery, so dinner matches how you actually feel. Looks in your fridge from one photo. Suggests three recipes that fit your energy tonight. Remembers the meals you loved, and skips the ones you didn't.",
		stack: [
			"Tanstack Start",
			"R3F",
			"Drizzle",
			"Neon Postgres",
			"Neon Gateway",
			"Zod",
			"three.js",
			"Mastra",
			"Better Auth",
			"Fly.io",
			"Posthog",
			"Assistant UI",
		],
		imagePath: ["projects/wattsForDinner.png", "projects/wattsForDinner3.png"],
		url: "https://watts-for-dinner.fly.dev/",
		status: "under construction 🚧",
	},
	{
		name: "Wishkept",
		description:
			"An AI gifting assistant that keeps up with your people and buys from small shops near them",
		stack: [
			"Tanstack Start",
			"Mastra",
			"Neon Postgres",
			"Netlify",
			"Posthog",
			"Start Foundation",
			"Flora.ai",
		],
		imagePath: ["projects/wishkept.png", "projects/wishkept2.png"],
		url: "https://wish-kept.netlify.app/",
		status: "under construction 🚧",
	},
	{
		name: "Toki's Take",
		description:
			"A notes garden built from Obsidian with a markdown parser, to share events and experiments.",
		stack: ["Tanstack Start", "Remark", "Rehype", "Three.js", "R3F", "Drei"],
		imagePath: ["projects/tokisTake.png", "projects/tokisTake2.png"],
		url: "https://tokis-take.netlify.app/",
	},
	{
		name: "Cozy Chapter",
		description:
			"A 3D personal media tracker and plant watering app — because my growing collection of Dracaena demanded better record-keeping.",
		stack: [
			"Tanstack Start",
			"R3F",
			"Drizzle",
			"Better Auth",
			"TypeScript",
			"Tailwind",
			"Zod",
			"Neon Postgres",
			"Netlify",
		],
		imagePath: ["projects/cozyRoom1.png", "projects/cozyChapter3.png"],
		url: "https://cozy-chapter.netlify.app/",
	},
	{
		name: "Pitaya Tracker",
		description:
			"A farm management system for a dragon fruit farm in Mozambique — tracking 130 variants, flowering cycles, taste profiles, and international exports.",
		stack: [
			"Next.js",
			"NextAuth",
			"TypeScript",
			"Neon Postgres",
			"Tailwind",
			"R3F",
			"Drizzle",
			"Zod",
			"Vercel",
		],
		imagePath: ["projects/pitaya1.png", "projects/pitaya2.png"],
		url: "",
	},
	{
		name: "Bin There Ate That",
		description:
			"A trash-panda platformer in three courses. You are a raccoon and there is food. You know what to do. Eat your way through a full three-course meal - entrée, main and just desserts, leaving every level cleaner than you found it. Technically. The dinner conversation flows, effortlessly. This trash panda is a bit of a yapper.",
		stack: ["Godot 4.7"],
		imagePath: ["projects/starter.png", "projects/binthere1.png"],
		url: "https://tokiloshi.itch.io/bin-there-ate-that",
	},
	{
		name: "Castle Capers",
		description:
			"A mini 3D murder mystery game — explore a castle, find clues, and figure out whodunit.",
		stack: ["R3F", "Drei", "Zustand", "Vercel"],
		imagePath: ["projects/castleCapers1.png", "projects/castleCapers2.png"],
		url: "https://castle-capers.vercel.app/",
	},
	{
		name: "Island Hopper",
		description:
			"Mapbox experiment exploring places around the world with animated 3D characters as guides, and lots of easter eggs.",
		stack: [
			"Next.js",
			"R3F",
			"Drei",
			"Mapbox",
			"Postprocessing",
			"GLSL",
			"Zustand",
			"Vercel",
		],
		imagePath: ["projects/islandHopper1.png", "projects/islandHopper2.png"],
		url: "https://island-hopper.vercel.app/",
	},

	{
		name: "Codemon",
		description:
			"A JRPG battle game with a coding theme — built in 3 days as a collaboration for Little Shop of Chaos - 2nd place Boot.dev hackathon winners",
		stack: ["Phaser", "MongoDB", "Express", "Typescript", "Vercel"],
		imagePath: ["projects/codemon1.png", "projects/codemon2.png"],
		url: "https://codemon-rho.vercel.app/",
		badge: "🏆",
	},
	{
		name: "Peaks and Beaks",
		description:
			"Strava meets tracking the species you've seen out on a walkabout, run, or row so I could appreciate the urban wildlife and watch personal mileage accrue.",
		stack: [
			"Django",
			"GeoDjango",
			"Postgres",
			"S3",
			"Heroku",
			"sendgrid",
			"whitenoise",
		],
		imagePath: ["projects/peaksBeaks1.png", "projects/peaksBeaks2.png"],
		url: "https://peaks-and-beaks.herokuapp.com/",
	},
];
