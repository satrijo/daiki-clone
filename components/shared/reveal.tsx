"use client";

import type * as React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
	delay?: number;
};

function Reveal({ className, delay = 0, style, ...props }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;

		if (!node) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ rootMargin: "0px 0px -12%", threshold: 0.15 },
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={cn(
				"transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100",
				isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0",
				className,
			)}
			style={{ transitionDelay: `${delay}ms`, ...style }}
			{...props}
		/>
	);
}

export { Reveal };
