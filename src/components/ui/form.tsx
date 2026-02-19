import { useForm } from "@tanstack/react-form";
import { contactSchema } from "@/lib/contact-schema";
import { toast } from "sonner";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({
	onSubmit,
	isSubmitting,
}: {
	onSubmit: (value: {
		name: string;
		email: string;
		message: string;
	}) => Promise<{ success: boolean }>;
	isSubmitting?: boolean;
}) {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		validators: {
			onSubmit: contactSchema,
		},
		onSubmit: async ({ value }) => {
			await onSubmit(value);
			form.reset();
		},
	});
	return (
		<>
			<Card className='w-full sm:max-w-md'>
				<CardHeader>
					<CardTitle>Reach out</CardTitle>
					<CardDescription>Leave a message</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						id='contact-form'
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit();
						}}>
						<FieldGroup>
							<form.Field
								name='name'
								children={(field) => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid;
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Name</FieldLabel>
											<Input
												id={field.name}
												type='text'
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder='What shall I call you?'
												autoComplete='name'
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									);
								}}
							/>
							<form.Field
								name='email'
								children={(field) => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid;
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Email</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												type='email'
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder='yourEmail@mail.com'
												autoComplete='email'
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									);
								}}
							/>
							<form.Field
								name='message'
								children={(field) => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid;
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Message</FieldLabel>
											<Textarea
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder='hi 👋'
												autoComplete='off'
											/>
											<FieldDescription>
												Let me know what's on your mind
											</FieldDescription>
										</Field>
									);
								}}
							/>
						</FieldGroup>
					</form>
				</CardContent>
				<CardFooter>
					<Button
						type='submit'
						form='contact-form'
						className='bg-amber cursor-pointer'
						disabled={isSubmitting || form.state.isSubmitting}>
						{isSubmitting || form.state.isSubmitting ? "Sending..." : "Send"}
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}
