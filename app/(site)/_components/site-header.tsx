import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

const mainNavigation = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Blog", href: "/blog" },
	{ label: "Case Studies", href: "/case-studies" },
	{ label: "Contact Us", href: "/contact" },
];

const serviceGroups = [
	{
		title: "Organic Search",
		items: [
			{ label: "SEO Services", href: "/seo-services" },
			{ label: "Enterprise SEO Services", href: "/enterprise-seo-services" },
			{
				label: "Digital Marketing Services",
				href: "/digital-marketing-services",
			},
			{ label: "Local SEO Services", href: "/local-seo-services" },
			{
				label: "Google Local Services Ads",
				href: "/google-local-services-ads",
			},
			{ label: "SEO Audits", href: "/seo-audits-services" },
		],
	},
	{
		title: "Digital Advertising",
		items: [
			{ label: "PPC Management Services", href: "/ppc-management" },
			{
				label: "Enterprise PPC Management",
				href: "/enterprise-ppc-management",
			},
			{ label: "Social Media Advertising", href: "/social-media-advertising" },
			{
				label: "Programmatic Advertising",
				href: "/programmatic-advertising-solutions",
			},
		],
	},
	{
		title: "Ecommerce",
		items: [
			{ label: "Ecommerce SEO Services", href: "/ecommerce-seo-strategies" },
			{ label: "Ecommerce PPC Campaigns", href: "/ecommerce-ppc-campaigns" },
			{
				label: "Ecommerce Website Development",
				href: "/ecommerce-website-development",
			},
			{ label: "Shopping Feed Automation", href: "/shopping-feed-automation" },
		],
	},
	{
		title: "Learn",
		items: [
			{ label: "Our SEO Results", href: "/our-seo-results" },
			{ label: "What Is an SEO Company?", href: "/what-is-seo-company" },
			{
				label: "What Is Digital Marketing?",
				href: "/what-is-digital-marketing",
			},
			{ label: "Best Marketing Tools", href: "/best-marketing-tools" },
		],
	},
];

const marketItems = [
	{ label: "Singapore Marketing Agency", href: "/singapore-marketing-agency" },
	{ label: "Dubai Marketing Agency", href: "/dubai-marketing-agency" },
];

function NavLink({ href, label }: { href: string; label: string }) {
	return (
		<Link
			className="flex items-center rounded-lg border border-transparent px-4 py-2 text-base font-medium text-muted-foreground transition-colors hover:border-border hover:bg-white hover:text-foreground"
			href={href}
		>
			{label}
		</Link>
	);
}

function SiteHeader() {
	return (
		<header className="fixed left-0 top-0 z-50 w-full bg-transparent pt-8 transition-all duration-500">
			<Container>
				<nav className="relative flex items-center">
					<div className="xl:min-w-[150px]">
						<Link href="/">
							<Image
								alt="Daiki Media"
								className="h-10 w-auto"
								height={100}
								src="https://www.daikimedia.com/images/logo.png"
								width={120}
							/>
						</Link>
					</div>

					<ul className="mx-auto hidden rounded-xl bg-white/70 p-2.5 shadow-sm ring-1 ring-black/5 backdrop-blur lg:flex">
						<li>
							<NavLink href="/" label="Home" />
						</li>
						<li>
							<NavLink href="/about" label="About" />
						</li>
						<li className="group -mb-3 pb-3">
							<button
								className="flex items-center rounded-lg border border-transparent px-4 py-2 text-base font-medium text-muted-foreground transition-colors hover:border-border hover:bg-white hover:text-foreground"
								type="button"
							>
								SEO Services
								<ChevronDown className="ml-1 size-4 transition-transform group-hover:rotate-180" />
							</button>
							<div className="pointer-events-none absolute left-0 top-full z-10 w-full origin-top scale-y-95 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:scale-y-100 group-hover:opacity-100">
								<div className="grid grid-cols-4 gap-6 rounded-xl bg-white p-6 text-gray-900 shadow-lg ring-1 ring-black/5">
									{serviceGroups.map((group) => (
										<div key={group.title}>
											<h5 className="mb-2 font-bold text-black">
												{group.title}
											</h5>
											<ul className="space-y-2">
												{group.items.map((item) => (
													<li key={item.href}>
														<Link
															className="text-sm text-muted-foreground hover:text-foreground"
															href={item.href}
														>
															{item.label}
														</Link>
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</div>
						</li>
						<li className="group relative -mb-3 pb-3">
							<button
								className="flex items-center rounded-lg border border-transparent px-4 py-2 text-base font-medium text-muted-foreground transition-colors hover:border-border hover:bg-white hover:text-foreground"
								type="button"
							>
								Market
								<ChevronDown className="ml-1 size-4 transition-transform group-hover:rotate-180" />
							</button>
							<div className="pointer-events-none absolute left-0 top-full z-10 min-w-[250px] origin-top scale-y-95 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:scale-y-100 group-hover:opacity-100">
								<ul className="space-y-2 rounded-xl bg-white p-5 shadow-lg ring-1 ring-black/5">
									{marketItems.map((item) => (
										<li key={item.href}>
											<Link
												className="text-sm text-muted-foreground hover:text-foreground"
												href={item.href}
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</li>
						<li>
							<NavLink href="/blog" label="Blog" />
						</li>
						<li>
							<NavLink href="/case-studies" label="Case Studies" />
						</li>
						<li>
							<NavLink href="/contact" label="Contact Us" />
						</li>
					</ul>

					<div className="ml-auto hidden items-center lg:flex">
						<Button
							asChild
							className="h-10 rounded-full px-5 shadow-sm hover:shadow-md"
							size="lg"
						>
							<a href="https://api.whatsapp.com/send?phone=601114850067">
								Book Free Audit
								<ArrowRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-0.5" />
							</a>
						</Button>
					</div>

					<details className="group ml-auto lg:hidden">
						<summary className="flex size-10 list-none items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 marker:hidden">
							<Menu className="size-5" />
						</summary>
						<div className="fixed inset-x-4 top-24 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
							<ul className="space-y-1">
								{mainNavigation.map((item) => (
									<li key={item.href}>
										<Link
											className="block rounded-lg px-4 py-3 font-medium text-foreground hover:bg-muted"
											href={item.href}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
							<Button
								asChild
								className="mt-4 h-11 w-full rounded-full"
								size="lg"
							>
								<a href="https://api.whatsapp.com/send?phone=601114850067">
									Book Free Audit
									<ArrowRight className="ml-1 size-4" />
								</a>
							</Button>
						</div>
					</details>
				</nav>
			</Container>
		</header>
	);
}

export { SiteHeader };
