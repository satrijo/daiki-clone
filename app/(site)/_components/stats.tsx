import { Container } from "@/components/shared/container";

const stats = [
	{
		value: "60",
		suffix: "%",
		label: "Project Completed",
	},
	{
		value: "30",
		suffix: "+",
		label: "Team Members",
	},
	{
		value: "40",
		suffix: "K",
		label: "Satisfied Clients",
	},
];

export function Stats() {
	return (
		<section className="relative z-10">
			<Container>
				<div className="mx-auto max-w-[850px] rounded-md bg-white p-2.5 shadow-sm ring-1 ring-black/5 dark:bg-card">
					<div
						className="grid grid-cols-1 items-center rounded border border-dashed border-gray-100 bg-white py-10 dark:border-white/10 dark:bg-card md:grid-cols-3"
						id="counter"
					>
						{stats.map((stat) => (
							<div
								className="relative flex flex-col items-center justify-center py-6 text-center after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[270px] after:-translate-x-1/2 after:bg-border last:after:hidden md:py-0 md:after:bottom-auto md:after:left-auto md:after:right-0 md:after:top-1/2 md:after:h-[60px] md:after:w-px md:after:-translate-y-1/2 md:after:translate-x-0"
								key={stat.label}
							>
								<h2 className="text-5xl font-bold leading-none tracking-tight">
									<span>{stat.value}</span>
									<span>{stat.suffix}</span>
								</h2>
								<p className="mt-3 text-sm text-muted-foreground">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
