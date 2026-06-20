import { CoreValues } from "./_components/core-values";
import { Footer } from "./_components/footer";
import { GetStarted } from "./_components/get-started";
import { GuidingPrinciples } from "./_components/guiding-principles";
import { HeroImage } from "./_components/hero-image";
import { HeroSection } from "./_components/hero-section";
import { SiteHeader } from "./_components/site-header";
import { Stats } from "./_components/stats";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1">
				<HeroSection />
				<HeroImage />
				<CoreValues />
				<GuidingPrinciples />
				<Testimonials />
				<Stats />
				<GetStarted />
			</main>
			<Footer />
		</div>
	);
}
