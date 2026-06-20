import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

function HeroSection() {
	return (
		<section className="bg-background pt-28 pb-10 sm:pt-32 lg:pt-40 lg:pb-12">
			<Container className="flex flex-col mx-auto text-center items-center max-w-[948px]">
				<Reveal>
					<p className="mb-4 capitalize font-medium sm:mb-6">
						About Daiki Media
					</p>
					<h1 className="text-4xl font-bold tracking-normal text-foreground leading-[1.15] sm:text-5xl lg:text-6xl lg:leading-[1.2]">
						We help businesses turn their website into a growth channel.
					</h1>
				</Reveal>
				<Reveal delay={120}>
					<div className="mt-6 space-y-4 text-black/80 text-base leading-7 sm:mt-8 lg:mt-10">
						<p>
							Daiki Media is a digital growth agency focused on SEO, web
							development, and performance-driven marketing. We help businesses
							improve visibility, build faster websites, and turn visitors into
							qualified leads.
						</p>
						<p>
							Instead of only creating beautiful pages, we focus on what matters
							most: clear messaging, technical performance, search visibility,
							and measurable business growth.
						</p>
					</div>
				</Reveal>
			</Container>
		</section>
	);
}

export { HeroSection };
