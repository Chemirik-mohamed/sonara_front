import { Link } from "react-router";
import logoSonara from "../../assets/logo_sonara.png";
export function Navbar() {
	return (
		<nav className="flex items-center justify-center h-20 pl-2 pr-2 text-muted border-b border-border">
			<div className="flex items-center  w-full max-w-4xl">
				<img src={logoSonara} alt="logo sonora" className="w-10" />
				<p className="logo">Sonara</p>
			</div>
			<ul className="flex  gap-4 items-center">
				<li>
					<a href="#link">Fonctionnalités</a>
				</li>
				<li>
					<a href="#link">Comment ça marche</a>
				</li>
				<li>
					<Link to="/signup" className="btn bg-brand border-none rounded-2xl">
						Essayer maintenant
					</Link>
				</li>
			</ul>
		</nav>
	);
}
