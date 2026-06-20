import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

const benefits = [
	"Free Digital Strategy Consultation",
	"Transparent Project Timeline",
	"Satisfaction Guaranteed",
];

export function GetStarted() {
	return (
		<section className="relative overflow-hidden py-20 md:pb-20 md:pt-36">
			<Container className="relative">
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
						Start Your Digital Transformation Journey Today!
					</h2>
					<p className="mx-auto mb-12 max-w-[400px] text-muted-foreground leading-7 max-lg:mt-6">
						By partnering with Daiki Media for your digital needs, we&apos;ll
						transform your vision into measurable success.
					</p>

					<Button asChild size="lg">
						<Link href="/contact">Get Started Today</Link>
					</Button>

					<ul className="mx-auto mt-8 flex max-w-[815px] flex-col items-center justify-between gap-5 lg:mt-20 lg:flex-row">
						{benefits.map((benefit) => (
							<li className="flex items-center text-center" key={benefit}>
								<CheckCircle2 className="mr-3 size-5 text-muted-foreground" />
								<p>{benefit}</p>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
}
