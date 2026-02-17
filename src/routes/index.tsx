// import * as fs from "node:fs";
// import { createFileRoute, useRouter } from "@tanstack/react-router";
// import { createServerFn } from "@tanstack/react-start";

// const filePath = "count.txt";

// async function readCount() {
// 	return parseInt(
// 		await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
// 	);
// }

// const getCount = createServerFn({
// 	method: "GET",
// }).handler(() => {
// 	return readCount();
// });

// const updateCount = createServerFn({
// 	method: "POST",
// })
// 	.inputValidator((d: number) => d)
// 	.handler(async ({ data }) => {
// 		const count = await readCount();
// 		await fs.promises.writeFile(filePath, `${count + data}`);
// 	});

// export const Route = createFileRoute("/")({
// 	component: Home,
// 	loader: async () => await getCount(),
// });

// function Home() {
// 	const router = useRouter();
// 	const state = Route.useLoaderData();
// 	return (
// 		<button
// 			type='button'
// 			onClick={() => {
// 				updateCount({ data: 1 }).then(() => {
// 					router.invalidate();
// 				});
// 			}}>
// 			Add 1 to {state}?
// 		</button>
// 	);
// }

// src/routes/index.tsx
import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import Header from "../components/Header";

const filePath = "count.txt";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<>
			{" "}
			<Header />
			<div className='min-h-screen bg-slate-900/80 flex flex-col items-center justify-center px-6'>
				<h1 className='text-2xl text-emerald-500'>TokiLoshi.xyz</h1>
				<h2 className='text-2xl text-emerald-400'>Life is more fun in 3D</h2>
				<p className='text-emerald-300'>Under construction 🚧</p>
			</div>
		</>
	);
}
