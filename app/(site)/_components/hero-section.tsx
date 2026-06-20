import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

function HeroSection() {
	return (
		<section className="bg-background pt-28 pb-8 sm:pt-32 lg:pt-40 lg:pb-10">
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
						<p className="hidden sm:block">
							Instead of only creating beautiful pages, we focus on what matters
							most: clear messaging, technical performance, search visibility,
							and measurable business growth.
						</p>
						<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
							<Button
								asChild
								className="h-10 rounded-full px-5 text-sm shadow-sm hover:shadow-md sm:min-w-[190px]"
								size="lg"
							>
								<Link href="/contact">
									Book a Free Website Audit
									<ArrowRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-0.5" />
								</Link>
							</Button>
							<Button
								asChild
								className="h-10 rounded-full px-5 text-sm sm:min-w-[170px]"
								size="lg"
								variant="outline"
							>
								<Link href="#strategy">View Growth Strategy</Link>
							</Button>
						</div>
						<p className="text-sm text-muted-foreground">
							Free review. No obligation. Clear next steps.
						</p>
					</div>
				</Reveal>
			</Container>
		</section>
	);
}

export { HeroSection };
