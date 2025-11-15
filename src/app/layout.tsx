import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FacebookPixel from "@/components/facebook-pixel";
import Footer from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { WhatsAppButton } from "./_components/whatsapp-button";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Free Webinar | Live Preview",
	description:
		"Workshop Nasional Teknik Parafrase dan Penulisan Akademik yang Beretika",
	icons: {
		icon: [
			{
				url: "/icons/favicon.svg",
				type: "image/svg+xml",
			},
		],
		shortcut: [
			{
				url: "/icons/favicon.svg",
				type: "image/svg+xml",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<head>
				<FacebookPixel />
			</head>
			<body
				className={`${inter.variable} font-sans antialiased relative min-h-screen overflow-x-hidden`}
			>
				<Navbar />
				{children}
				<WhatsAppButton />
				<Footer />
			</body>
		</html>
	);
}
