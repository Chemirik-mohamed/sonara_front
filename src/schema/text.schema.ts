import z from "zod";

export const textSchema = z.object({
	text: z
		.string()
		.trim()
		.min(1, { error: "le text il doit etre ou min de 1" })
		.max(500, { error: "le text il doit etre ou max de 500" }),

	language: z.enum(["fr", "en"]).default("en"),
});

export type TextSchemaInput = z.infer<typeof textSchema>;
