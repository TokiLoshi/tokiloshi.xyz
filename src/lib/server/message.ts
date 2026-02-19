import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "../contact-schema";

export const sendMessage = createServerFn({ method: "POST" }).handler(
	async ({ data }) => {
		const input = contactSchema.parse(data);
		console.log("CONTACT message: ", input);
		return { success: true };
	},
);
