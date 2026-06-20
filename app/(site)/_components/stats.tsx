import { BarChart3, SearchCheck, Wrench } from "lucide-react";

import { Container } from "@/components/shared/container";

const stats = [
	{
		step: "01",
		value: "Audit",
		label:
			"Find technical SEO, speed, and messaging issues before redesigning.",
		icon: SearchCheck,
	},
	{
		step: "02",
		value: "Optimize",
		label:
			"Improve page structure, performance, content, and conversion paths.",
		icon: Wrench,
	},
	{
		step: "03",
		value: "Grow",
		label: "Track visibility, leads, and conversions to improve continuously.",
		icon: BarChart3,
	},
];

export function Stats() {
	return (
		<section className="relative z-10 py-8 md:py-10">
			<Container>
				<div className="mx-auto max-w-[900px] rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-black/5 dark:bg-card">
					<div
						className="grid grid-cols-1 items-stretch rounded-xl border border-dashed border-gray-100 bg-white py-6 dark:border-white/10 dark:bg-card md:grid-cols-3"
						id="growth-framework"
					>
						{stats.map((stat) => {
							const Icon = stat.icon;

							return (
								<div
									className="relative flex flex-col items-center justify-center px-6 py-6 text-center after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[270px] after:-translate-x-1/2 after:bg-border last:after:hidden md:after:bottom-auto md:after:left-auto md:after:right-0 md:after:top-1/2 md:after:h-[70px] md:after:w-px md:after:-translate-y-1/2 md:after:translate-x-0"
									key={stat.value}
								>
									<span className="mb-4 flex size-11 items-center justify-center rounded-full bg-orange-100 text-orange-700">
										<Icon className="size-5" />
									</span>
									<p className="mb-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
										{stat.step}
									</p>
									<h2 className="text-3xl font-bold leading-none tracking-tight sm:text-4xl">
										{stat.value}
									</h2>
									<p className="mt-4 text-sm leading-6 text-muted-foreground">
										{stat.label}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</section>
	);
}
