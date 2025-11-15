"use client";

import * as fbq from "@/lib/facebook-pixel";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export const WhatsAppButton = () => {
	return (
		<Link
			href="https://wa.me/6285712208535"
			onClick={() => fbq.contact()}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-8 right-8 z-[9999] inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
			aria-label="Hubungi kami via WhatsApp"
		>
			<MessageCircle className="h-6 w-6" />
			<span className="text-sm font-medium">Hubungi Kami</span>
		</Link>
	);
};

export default WhatsAppButton;
