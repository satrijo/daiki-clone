import Image from "next/image";

import { Container } from "@/components/shared/container";

const coreValues = [
	{
		title: "Our Passion",
		description:
			"Our passion is delivering innovative digital solutions to help brands grow and thrive online.",
		icon: "https://www.daikimedia.com/images/about/passion.svg",
	},
	{
		title: "Transparency",
		description:
			"Transparency is key at Daiki Media, ensuring clear communication and trust in every project.",
		icon: "https://www.daikimedia.com/images/about/transparency.svg",
	},
	{
		title: "Our Mission",
		description:
			"Daiki Media's mission is to empower businesses with innovative digital solutions for sustainable growth.",
		icon: "https://www.daikimedia.com/images/about/mission.svg",
	},
];

export function CoreValues() {
	return (
		<section className="relative overflow-hidden bg-white py-20 dark:bg-background md:py-36">
			<Container>
				<div className="mx-auto mb-10 max-w-[575px] text-center md:mb-12">
					<p className="mb-3 font-medium leading-[1.3] uppercase tracking-wide">
						Our Core Values
					</p>
					<h2 className="text-3xl font-bold leading-[1.25] sm:text-4xl sm:leading-[1.3]">
						Our Business Is Steered By Our Core Values
					</h2>
				</div>

				<div className="relative z-10">
					<div
						aria-hidden="true"
						className="absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
					>
						<div className="size-[300px] rounded-full bg-orange-300/20 blur-[145px] xl:size-[442px]" />
						<div className="-ml-[170px] size-[300px] rounded-full bg-orange-300/25 blur-[145px] xl:size-[442px]" />
						<div className="-ml-[170px] size-[300px] rounded-full bg-orange-300/20 blur-[145px] xl:size-[442px]" />
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{coreValues.map((value) => (
							<div
								className="rounded-md bg-white p-2.5 shadow-sm ring-1 ring-black/5 dark:bg-card"
								key={value.title}
							>
								<div className="h-full rounded border border-dashed border-gray-100 p-6 text-center dark:border-white/10 sm:p-8 lg:p-10">
									<Image
										alt=""
										className="mb-6 inline-block h-auto w-auto"
										height={40}
										src={value.icon}
										width={40}
									/>
									<h3 className="mb-2.5 text-2xl font-semibold tracking-tight">
										{value.title}
									</h3>
									<p className="text-muted-foreground leading-7">
										{value.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
