import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

const benefits = [
	{
		title: "Free Review",
		description:
			"No obligation, just a practical look at your current website.",
	},
	{
		title: "Actionable Insights",
		description: "Recommendations for speed, SEO, messaging, and conversions.",
	},
	{
		title: "Clear Next Steps",
		description: "Know what to improve first and why it matters for growth.",
	},
];

export function GetStarted() {
	return (
		<section className="relative overflow-hidden py-20 md:py-24">
			<Container className="relative">
				<div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-white px-5 py-12 shadow-sm dark:bg-card sm:px-8 md:py-16">
					<div
						aria-hidden="true"
						className="absolute -bottom-[442px] left-1/2 -z-10 hidden -translate-x-1/2 md:flex"
					>
						<div className="size-[335px] rounded-full bg-orange-300/20 blur-[145px] xl:size-[442px]" />
						<div className="-ml-[170px] size-[335px] rounded-full bg-orange-300/25 blur-[145px] xl:size-[442px]" />
						<div className="-ml-[170px] size-[335px] rounded-full bg-orange-300/20 blur-[145px] xl:size-[442px]" />
					</div>

					<div
						aria-hidden="true"
						className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('https://www.daikimedia.com/images/hero-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"
					/>

					<div className="mx-auto text-center">
						<h2 className="mx-auto mb-5 max-w-[800px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
							Ready to improve your website performance?
						</h2>
						<p className="mx-auto mb-12 max-w-[520px] text-muted-foreground leading-7 max-lg:mt-6">
							Let&apos;s review your website and find practical ways to improve
							speed, SEO, and conversions.
						</p>

						<div className="flex flex-col items-center gap-3">
							<Button
								asChild
								className="h-10 rounded-full px-5 text-sm shadow-sm hover:shadow-md sm:min-w-[210px]"
								size="lg"
							>
								<Link href="/contact">
									Book a Free Website Audit
									<ArrowRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-0.5" />
								</Link>
							</Button>
							<p className="text-sm text-muted-foreground">
								Takes 30 seconds to request. We&apos;ll review the key issues
								first.
							</p>
						</div>

						<ul className="mx-auto mt-10 grid max-w-4xl gap-4 text-left md:grid-cols-3 lg:mt-16">
							{benefits.map((benefit) => (
								<li
									className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:bg-card/80"
									key={benefit.title}
								>
									<div className="mb-3 flex items-center gap-3">
										<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700">
											<CheckCircle2 className="size-4" />
										</span>
										<h3 className="font-semibold">{benefit.title}</h3>
									</div>
									<p className="text-sm leading-6 text-muted-foreground">
										{benefit.description}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
}
