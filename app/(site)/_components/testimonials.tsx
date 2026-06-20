import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const proofPoints = [
	{
		label: "SEO",
		name: "Search Visibility",
		quote:
			"Improve page structure, technical SEO, and content direction so your website can attract more qualified organic traffic.",
	},
	{
		label: "Speed",
		name: "Faster Website Experience",
		quote:
			"Build faster, clearer pages that support better user experience and stronger conversion paths.",
	},
	{
		label: "CRO",
		name: "Stronger Lead Conversion",
		quote:
			"Turn visitors into leads with focused messaging, stronger calls to action, and practical landing page improvements.",
	},
];

export function Testimonials() {
	return (
		<section className="relative overflow-hidden py-20 md:py-28">
			<Container className="relative">
				<div className="mx-auto mb-10 max-w-[550px] text-center md:mb-12">
					<p className="mb-3 font-medium leading-[1.3] uppercase tracking-wide">
						Proof Points
					</p>
					<h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
						Where better digital strategy creates measurable impact
					</h2>
				</div>

				<div className="relative z-10">
					<div
						aria-hidden="true"
						className="absolute left-1/2 top-1/2 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/20 blur-[145px]"
					/>

					<div className="grid gap-6 md:grid-cols-3">
						{proofPoints.map((proof, index) => (
							<Reveal
								className="rounded-md bg-white p-2.5 shadow-sm dark:bg-card"
								delay={index * 100}
								key={proof.name}
							>
								<div className="flex h-full flex-col rounded border border-dashed border-gray-100 p-6 dark:border-white/10 sm:p-8">
									<div className="pb-7">
										<span className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
											{proof.label}
										</span>
										<h3 className="text-base font-semibold">{proof.name}</h3>
									</div>
									<p className="mb-7 flex-1 leading-[1.75] text-muted-foreground dark:text-white">
										{proof.quote}
									</p>
									<div className="border-t border-dashed border-gray-100 pt-7 dark:border-white/10" />
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
