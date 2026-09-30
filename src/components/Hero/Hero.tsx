import { Link } from "react-router";
import oooscillate from "../../assets/oooscillate.svg";

export function Hero() {
	return (
		<section className="flex flex-col items-center px-4 pt-20 pb-16 text-center md:pt-28">
			<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
				Synthèse vocale open source · Propulsé par Kokoro
			</p>

			<h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
				Transformez n'importe quel texte{" "}
				<span className="text-brand">en voix naturelle</span>
			</h1>

			<p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
				Collez un texte en français ou en anglais : Sonara le lit avec une voix
				naturelle. Écoutez-le en ligne ou téléchargez le fichier audio.
			</p>

			<div className="mt-10 flex flex-col gap-3 sm:flex-row">
				<Link
					to="/signup"
					className="btn btn-lg rounded-full border-none bg-brand text-white shadow-none hover:bg-brand/90"
				>
					Essayer maintenant <span aria-hidden="true">→</span>
				</Link>
				<button
					type="button"
					className="btn btn-lg rounded-full border-brand bg-transparent text-brand shadow-none hover:bg-bg-tinted"
				>
					Écouter un exemple
				</button>
			</div>

			<div className="mt-16 h-40 w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-bg-tinted md:h-56">
				<img src={oooscillate} alt="" className="h-full w-full object-cover" />
			</div>
		</section>
	);
}
