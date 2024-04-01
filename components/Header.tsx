"use client";

import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { useEffect, useState } from "react";

import Link from "@/components/Link";
import MobileNav from "@/components/MobileNav";
// import SearchButton from '@/components/SearchButton'
// import ThemeSwitch from '@/components/ThemeSwitch'
import { Button } from "@/components/ui/button";

const headerNavLinks = [
	{ href: "/", title: "Home" },
	{ href: "/blog", title: "Blog" },
	{ href: "/projects", title: "Projects" },
];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		document.addEventListener("scroll", changeBackground);

		return () => document.removeEventListener("scroll", changeBackground);
	}, []);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-4 z-40 flex h-[60px] mx-8 md:mx-auto items-center justify-between rounded-3xl bg-secondary border-border border px-4 md:px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-all duration-200 md:max-w-2xl lg:max-w-4xl",
				isScrolled && "bg-background/80 border-transparent"
			)}
		>
			<div className="w-full mx-auto flex h-[60px] items-center justify-between">
				<div>
					<Link href="/">
						<div className="flex items-center justify-between">
							<NextImage
								src="/img/logo.png"
								alt="Logo"
								width="40"
								height="40"
							/>
						</div>
					</Link>
				</div>
				<div className="flex items-center md:space-x-3">
					<ul className="hidden space-x-2 sm:flex">
						{headerNavLinks.map((link, i) => (
							<li key={i}>
								<Button asChild
									variant="ghost"
								>
									<Link
										className={cn(
											"px-3 py-2 text-sm font-medium transition-all duration-300",
											!isScrolled && "hover:bg-primary/10",
											)}
										href={link.href}
									>
										{link.title}
									</Link>
								</Button>
							</li>
						))}
					</ul>
					{/* <SearchButton /> */}
					{/* <ThemeSwitch /> */}
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
