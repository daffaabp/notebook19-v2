"use client";

import * as fbq from "@/lib/facebook-pixel";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
	{ name: "Tantangan", href: "#problem" },
	{ name: "Manfaat", href: "#benefits" },
	{ name: "Fasilitas", href: "#features" },
	{ name: "Testimoni", href: "#testimonials" },
	{ name: "Penawaran", href: "#support" },
	{ name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			const offsetTop =
				element.getBoundingClientRect().top + window.pageYOffset - 80;
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				isScrolled || isMobileMenuOpen
					? "bg-white border-b border-gray-200"
					: "bg-white/80 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none"
			}`}
		>
			<nav
				className="relative mx-auto max-w-7xl px-4 py-2.5 md:py-4"
				aria-label="Navigasi Utama"
			>
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="relative h-7 w-24 md:h-10 md:w-32"
						aria-label="Kembali ke Beranda"
					>
						<Image
							src="/images/kelasinovatif-clean.png"
							alt="Kelas Inovatif"
							fill
							className="object-contain"
							priority
						/>
					</Link>

					<div className="hidden items-center gap-4 lg:gap-6 md:flex">
						<div className="flex items-center gap-0.5 lg:gap-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									onClick={(e) => handleClick(e, item.href)}
									className="rounded-lg px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 whitespace-nowrap"
									aria-label={`Lihat ${item.name}`}
								>
									{item.name}
								</Link>
							))}
						</div>

					<Link
						href="#registration"
						onClick={(e) => {
							e.preventDefault();
							const element = document.querySelector("#registration");
							if (element) {
								const offsetTop =
									element.getBoundingClientRect().top + window.pageYOffset - 80;
								window.scrollTo({
									top: offsetTop,
									behavior: "smooth",
								});
							}
							fbq.initiateCheckout();
						}}
						className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2 text-sm font-medium text-white transition-all hover:brightness-110"
						aria-label="Daftar Workshop Sekarang"
					>
						Daftar Sekarang
					</Link>
					</div>

					<button
						type="button"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden"
						aria-expanded={isMobileMenuOpen}
						aria-controls="mobile-menu"
						aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
					>
						<span className="sr-only">
							{isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
						</span>
						{isMobileMenuOpen ? (
							<X className="h-5 w-5" aria-hidden="true" />
						) : (
							<Menu className="h-5 w-5" aria-hidden="true" />
						)}
					</button>
				</div>

				{/* Mobile menu */}
				<div
					className={`fixed inset-x-0 bottom-0 top-[52px] z-40 overflow-hidden transition-transform duration-300 md:hidden ${
						isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div
						className={`relative h-full space-y-2 overflow-y-auto bg-white/95 px-4 pb-6 pt-4 shadow-xl backdrop-blur-xl transition-opacity duration-300 ${
							isMobileMenuOpen ? "opacity-100" : "opacity-0"
						}`}
						id="mobile-menu"
						role="menu"
					>
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={(e) => handleClick(e, item.href)}
								className="block rounded-lg px-4 py-2.5 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100/80 hover:text-gray-900"
								role="menuitem"
								aria-label={`Lihat ${item.name}`}
							>
								{item.name}
							</Link>
						))}
						<Link
							href="#registration"
							onClick={(e) => {
								e.preventDefault();
								const element = document.querySelector("#registration");
								if (element) {
									const offsetTop =
										element.getBoundingClientRect().top + window.pageYOffset - 80;
									window.scrollTo({
										top: offsetTop,
										behavior: "smooth",
									});
								}
								setIsMobileMenuOpen(false);
								fbq.initiateCheckout();
							}}
							className="mt-4 block rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-3 text-center text-base font-medium text-white transition-all hover:brightness-110"
							role="menuitem"
							aria-label="Daftar Workshop Sekarang"
						>
							Daftar Sekarang
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
