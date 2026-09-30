import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";

export function Home() {
	return (
		<main className="min-h-screen bg-bg text-ink">
			<Navbar />
			<Hero />
		</main>
	);
}
