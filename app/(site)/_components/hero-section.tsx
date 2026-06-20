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
						Crafting Digital Excellence with Daiki Media&apos;s Innovation
					</h1>
				</Reveal>
				<Reveal delay={120}>
					<p className="mt-6 text-black/80 text-base leading-7 sm:mt-8 lg:mt-10">
						Working with Daiki Media has been a game-changer for our business.
						From designing a visually stunning, user-friendly website to
						establishing a powerful digital presence across multiple channels,
						they have delivered exceptional results at every step. Their team
						brought our vision to life, combining creativity with advanced
						marketing strategies tailored to our needs. With Daiki Media, we not
						only reached a wider audience but also saw an impressive increase in
						engagement and revenue. Their dedication and expertise exceeded our
						expectations, making them an invaluable partner in our digital
						growth journey.
					</p>
				</Reveal>
			</Container>
		</section>
	);
}

export { HeroSection };
