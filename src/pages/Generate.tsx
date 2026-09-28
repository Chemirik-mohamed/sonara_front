import { type SubmitEvent, useState } from "react";
import { generateText } from "../api/generate";
import { textSchema } from "../schema/text.schema";
export function Generate() {
	const [textValue, setTextValue] = useState("");

	const [audioUrl, setAudioUrl] = useState<string | null>(null);
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextValue(event.target.value);
	};

	const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		const result = textSchema.safeParse({ text: textValue });

		if (!result.success) {
			console.log("Données invalides");
			return;
		}

		const response = await generateText(result.data);

		const url = URL.createObjectURL(response);

		if (audioUrl !== null) {
			URL.revokeObjectURL(audioUrl);
		}

		setAudioUrl(url);
		setTextValue("");

		// console.log(response);
	};

	return (
		<div className="flex items-center justify-center h-screen flex-col">
			<form
				onSubmit={handleSubmit}
				className="
    flex w-full max-w-4xl items-end gap-3
    rounded-4xl border border-base-300
    bg-base-200 p-3 shadow-sm
    focus-within:border-primary
    focus-within:ring-2 focus-within:ring-primary/20
  "
			>
				<label htmlFor="text" className="sr-only">
					Texte à convertir
				</label>
				<textarea
					value={textValue}
					onChange={handleChange}
					id="text"
					// placeholder="Bio"
					className="
    min-h-12 max-h-40 flex-1 resize-none
    border-0 bg-transparent px-3 py-3
    text-base leading-6 outline-none
  "
				></textarea>
				<button type="submit" className="btn btn-primary shrink-0 rounded-full">
					Générer
				</button>
			</form>

			{audioUrl && (
				<div className="flex items-center gap-2 mt-2 w-full max-w-4xl p-2">
					{/* biome-ignore lint/a11y/useMediaCaption: l'audio est généré à partir du texte saisi par l'utilisateur, aucun sous-titre à fournir*/}
					<audio className="w-full" src={audioUrl} controls />

					<a
						className="btn btn-primary shrink-0 rounded-full mt-0.5 mb-0.5"
						download="audio.wav"
						href={audioUrl}
					>
						Téléchargement
					</a>
				</div>
			)}
		</div>
	);
}
