import { Boxes, Gem, Lightbulb } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const principles = [
	{
		label: "Website & SEO audit",
		icon: Lightbulb,
	},
	{
		label: "Strategy roadmap based on technical and content gaps",
		icon: Boxes,
	},
	{
		label: "Technical improvements for speed, structure, and SEO foundation",
		icon: Gem,
	},
	{
		label: "Landing page optimization with stronger conversion flow",
		icon: Lightbulb,
	},
	{
		label: "Tracking, reporting, and continuous iteration",
		icon: Boxes,
	},
];

export function GuidingPrinciples() {
	return (
		<section className="relative overflow-hidden pt-10">
			<Container className="relative z-10">
				<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 xl:gap-x-24">
					<Reveal className="relative mx-auto flex min-h-[360px] w-full max-w-[360px] items-center justify-end md:max-w-none md:justify-end">
						<Image
							alt="Digital marketing dashboard preview"
							className="w-[70%] max-w-[250px] rounded-3xl object-cover lg:max-w-[320px] xl:max-w-[420px]"
							height={1280}
							src="https://www.daikimedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg1.c0bd080f.jpg&w=1200&q=75"
							width={1920}
						/>
						<div className="absolute bottom-6 left-0 w-[55%] max-w-[180px] md:bottom-8 md:max-w-[250px] xl:max-w-[344px]">
							<Image
								alt="Digital marketing team preview"
								className="rounded-3xl object-cover shadow-lg"
								height={1281}
								src="https://www.daikimedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg2.6166577c.jpg&w=1200&q=75"
								width={1920}
							/>
						</div>
					</Reveal>

					<div className="text-left max-md:text-center">
						<p className="mb-3 font-medium leading-[1.3] uppercase tracking-wide">
							How We Work
						</p>
						<h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:mb-8">
							A practical workflow for better website performance.
						</h2>
						<p className="mb-11 text-muted-foreground leading-7 max-md:mb-6">
							We turn business goals into a focused website and marketing plan,
							then improve it with data, technical quality, and clear conversion
							paths.
						</p>

						<ul className="mb-10 space-y-4 md:mb-14 md:space-y-6">
							{principles.map((principle) => {
								const Icon = principle.icon;

								return (
									<li
										className="flex items-center gap-x-3 max-md:justify-center"
										key={principle.label}
									>
										<span className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 dark:bg-card">
											<span className="flex size-8 items-center justify-center rounded-full bg-orange-100 text-foreground dark:bg-white/10 dark:text-primary">
												<Icon className="size-4" />
											</span>
										</span>
										<span className="font-medium dark:text-white">
											{principle.label}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
}
