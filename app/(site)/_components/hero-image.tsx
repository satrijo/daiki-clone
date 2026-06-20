import Image from "next/image";
import { Container } from "@/components/shared/container";
export function HeroImage() {
	const urlImage = [
		"https://www.daikimedia.com/_next/image?url=%2Fimages%2Fabout%2Fhello1.avif&w=640&q=75",
		"https://www.daikimedia.com/_next/image?url=%2Fimages%2Fabout%2Fhello2.avif&w=640&q=75",
		"https://www.daikimedia.com/_next/image?url=%2Fimages%2Fabout%2Fhello3.avif&w=640&q=75",
	];
	return (
		<section className="relative isolate">
			<Container className="relative z-10 flex flex-col mx-auto text-center items-center">
				<div
					aria-hidden="true"
					className="absolute left-1/2 top-20 -z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
				>
					<div className="size-87 rounded-full bg-orange-500/20 blur-[145px]" />
				</div>
				<div className="mb-20 grid grid-cols-1 items-center gap-6 sm:grid-cols-3 sm:gap-8 lg:mb-40 lg:gap-10">
					{urlImage.map((url) => (
						<div className="col-span-1" key={url}>
							<div className="overflow-hidden rounded-md bg-white p-2.5 shadow-box dark:bg-dark-200">
								<Image
									src={url}
									width={383}
									height={494}
									className="h-auto w-full rounded-md"
									alt="about images"
									loading="lazy"
								/>
							</div>
						</div>
					))}
				</div>
				<div className="grid grid-cols-1 gap-6 text-left md:grid-cols-12 md:gap-10">
					<div className="md:col-span-6">
						<div className="max-w-[550px]">
							<p className="mb-3 font-medium leading-[1.3] uppercase tracking-wide">
								Our Impact
							</p>
							<h2 className="text-3xl font-bold leading-[1.25] sm:text-4xl sm:leading-[1.3]">
								A Decade of Digital Innovation &amp; Results
							</h2>
						</div>
					</div>
					<div className="max-w-[590px] pb-0 md:col-span-6 md:py-10">
						<p className="leading-7 text-muted-foreground">
							Daiki Media has over 10 years of experience in the digital
							marketing industry, delivering exceptional results. Our team of
							experts creates customized solutions to help businesses grow
							online and achieve their goals. We specialize in SEO, web
							development, and digital marketing strategies that ensure
							long-term success.
							<br />
							<br />
							Whether you need to enhance your online presence or drive
							measurable results, we’re here to transform your brand and help
							you succeed in the competitive digital landscape.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
