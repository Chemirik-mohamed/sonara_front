import z from "zod";

const passwordSchema = z
	.string()
	.min(8, { error: "Le mot de passe doit contenir 8 caractères" })
	.max(125, { error: "Le mot de passe ne doit pas dépasser 125 caractères" });

export const signupSchema = z.object({
	name: z.string().trim().min(3).max(30),
	email: z.email(),
	password: passwordSchema,
});
