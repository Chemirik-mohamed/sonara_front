import z from "zod";
import { apiClient } from "../lib/api-client";
import { type TextSchemaInput, textSchema } from "../schema/text.schema";

export const generateText = async (input: TextSchemaInput) => {
	const result = textSchema.safeParse(input);

	if (!result.success) {
		const { fieldErrors } = z.flattenError(result.error);

		console.error("Données invalide", fieldErrors);

		throw new Error("Validation échouée");
	}
	const body = result.data;

	const response = await apiClient.post<Blob>("/generate", body, {
		timeout: 60000,
		responseType: "blob",
	});

	return response.data;
};
