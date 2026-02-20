import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().min(2, "Please add your name"),
	email: z.email("Please use a valid email so I can get back to you"),
	message: z
		.string()
		.min(10, "Could you please give me some more details?")
		.max(2000, "Message is a bit long..."),
});

export const contactSubmitSchema = contactSchema.extend({
	company: z.string(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ConatctSubmitInput = z.infer<typeof contactSubmitSchema>;
