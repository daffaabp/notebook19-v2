"use client";

import * as fbq from "@/lib/facebook-pixel";
import { useEffect } from "react";
import { Benefits } from "./_components/benefits";
import { FAQ } from "./_components/faq";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { Problem } from "./_components/problem";
import { RegistrationForm } from "./_components/registration-form";
import { Support } from "./_components/support";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
	useEffect(() => {
		// Track pageview when component mounts
		fbq.pageview();
	}, []);

	return (
		<main>
			{/* Framework Detail Structure - Urutan Sesuai Framework */}
			{/* 1. Hero */}
			<Hero />
			
			{/* 2. Problem (Tradisional) */}
			<Problem />
			
			{/* 3. Benefit */}
			<Benefits />
			
			{/* 4. Statement + CTA (sudah ada di Hero atau bisa ditambahkan di Support) */}
			
			{/* 5. Testimoni */}
			<Testimonials />
			
			{/* 6. Features */}
			<Features />
			
			{/* 7. Special Offer */}
			<Support />
			
			{/* 8. FAQ */}
			<FAQ />
			
			{/* 9. Form Pendaftaran */}
			<RegistrationForm />
		</main>
	);
}
