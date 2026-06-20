import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";

const seoServices = [
	{ label: "SEO Services", href: "/seo-services" },
	{ label: "Enterprise SEO", href: "/enterprise-seo-services" },
	{ label: "Digital Marketing", href: "/digital-marketing-services" },
	{ label: "Local SEO", href: "/local-seo-services" },
	{ label: "Google Local Ads", href: "/google-local-services-ads" },
	{ label: "SEO Audits", href: "/seo-audits-services" },
];

const advertisingServices = [
	{ label: "PPC Management Services", href: "/ppc-management" },
	{
		label: "Enterprise PPC Management Services",
		href: "/enterprise-ppc-management",
	},
	{ label: "Social Media Advertising", href: "/social-media-advertising" },
	{
		label: "Enterprise Social Media Advertising",
		href: "/enterprise-social-media-advertising",
	},
	{
		label: "Programmatic Advertising Solutions",
		href: "/programmatic-advertising-solutions",
	},
];

const socialLinks = [
	{
		label: "Visit our Facebook page",
		href: "https://www.facebook.com/daikimedia.malaysia",
		text: "Fb",
	},
	{
		label: "Follow us on X (Twitter)",
		href: "https://x.com/daikimedia",
		text: "X",
	},
	{
		label: "Connect with us on LinkedIn",
		href: "https://www.linkedin.com/company/daikimedia/",
		text: "In",
	},
	{
		label: "Follow us on Instagram",
		href: "https://www.instagram.com/daikimedia/",
		text: "Ig",
	},
	{
		label: "Join our Telegram channel",
		href: "https://t.me/daikimedia",
		text: "Tg",
	},
];

function FooterLink({ href, label }: { href: string; label: string }) {
	return (
		<Link
			className="relative inline-block overflow-hidden text-base capitalize text-muted-foreground transition-colors before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-foreground before:transition-transform before:duration-500 before:content-[''] hover:text-foreground before:hover:origin-left before:hover:scale-x-100"
			href={href}
		>
			{label}
		</Link>
	);
}

function Footer() {
	return (
		<footer className="relative overflow-hidden bg-white pt-20 dark:bg-background">
			<Container>
				<div className="mb-20 grid grid-cols-12 gap-4 max-lg:gap-y-10 max-lg:text-center">
					<div className="col-span-12 lg:col-span-6">
						<Link className="mb-10 inline-block" href="/">
							<Image
								alt="Daiki Media"
								height={130}
								src="https://www.daikimedia.com/images/logo.png"
								width={160}
							/>
						</Link>
						<p className="max-w-[350px] text-muted-foreground leading-7 max-lg:mx-auto">
							Boost your online presence with Daiki Media&apos;s expert digital
							marketing, SEO, and web development solutions. Contact us today to
							grow your brand and reach new customers effectively.
						</p>
					</div>

					<div className="col-span-12 lg:col-span-2">
						<p className="mb-8 text-lg font-medium">SEO Services</p>
						<ul className="space-y-3">
							{seoServices.map((item) => (
								<li key={item.href}>
									<FooterLink href={item.href} label={item.label} />
								</li>
							))}
						</ul>
					</div>

					<div className="col-span-12 lg:col-span-2">
						<p className="mb-8 text-lg font-medium">Digital Advertising</p>
						<ul className="space-y-3">
							{advertisingServices.map((item) => (
								<li key={item.href}>
									<FooterLink href={item.href} label={item.label} />
								</li>
							))}
						</ul>
					</div>

					<div className="col-span-12 lg:col-span-2">
						<p className="mb-8 text-lg font-medium">Contact Daiki Media</p>
						<p className="mb-3">
							<FooterLink
								href="mailto:lukesh@daikimedia.com"
								label="lukesh@daikimedia.com"
							/>
						</p>
						<p className="mb-3">
							<FooterLink href="tel:+601114850067" label="+601114850067" />
						</p>
						<ul className="flex items-center gap-4 max-lg:justify-center">
							{socialLinks.map((social) => (
								<li key={social.href}>
									<a
										aria-label={social.label}
										className="flex size-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
										href={social.href}
										rel="noreferrer"
										target="_blank"
									>
										{social.text}
									</a>
								</li>
							))}
						</ul>
						<p className="mt-6 text-sm leading-6 text-foreground">
							Jalan Ara, SD 7/3d, Bandar Sri Damansara, 52200 Kuala Lumpur
						</p>
					</div>
				</div>

				<div className="border-t border-dashed border-border py-10 max-lg:text-center">
					<div className="flex max-lg:flex-col lg:items-center">
						<p className="text-muted-foreground max-lg:mb-10">
							2026 Daiki Media. All Rights Reserved
						</p>
						<ul className="flex items-center gap-10 max-lg:justify-center lg:ml-auto">
							<li>
								<FooterLink href="/privacy" label="Privacy Policy" />
							</li>
							<li>
								<FooterLink href="/terms" label="Terms & Conditions" />
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	);
}

export { Footer };
