import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "../contact-schema";
import { Resend } from "resend";

export const sendMessage = createServerFn({ method: "POST" }).handler(
	async ({ data }) => {
		const input = contactSchema.parse(data);
		console.log("CONTACT message: ", input);
		const resend = new Resend(process.env.RESEND_API_KEY);
		const to = process.env.CONTACT_TO_EMAIL;
		const from = process.env.CONTACT_FROM_EMAIL;

		if (!to || !from || !process.env.RESEND_API_KEY) {
			throw new Error("Missing environment variables");
		}

		const subject = `Portfolio message received 💥 from ${input.name}`;
		const html = `
		<div>
		<p>Name: ${input.name}</p>
		<p>Email: ${input.email}</p>
		<p>Message: ${input.message}</p>
		<p>${escapeHtml(input.message).replace(/\n/g, "<br/>")}
		</div>`;

		const { data: sent, error } = await resend.emails.send({
			from,
			to: [to],
			subject,
			replyTo: input.email,
			html,
		});

		if (error) {
			console.error("Resend error:", error);
			throw new Error(error.message || "failed to send email");
		}
		return { success: true };
	},
);

function escapeHtml(s: string) {
	return s
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}
