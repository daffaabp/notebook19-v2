"use client";

import { CheckCircle2, Lightbulb, Target } from "lucide-react";
import Link from "next/link";
import { solutionContent } from "../_contents/solution-content";
import * as fbq from "@/lib/facebook-pixel";

export const Solution = () => {
	return (
		<section
			id="solution"
			className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-8 sm:py-12 md:py-16 lg:py-24"
		>
			{/* Background decoration */}
			<div className="pointer-events-none absolute inset-0">
				{/* Gradient Orbs */}
				<div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
				<div className="absolute right-1/4 top-3/4 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

				{/* Grid Pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div className="mx-auto max-w-3xl text-center mb-6 sm:mb-8 md:mb-12">
					<div className="inline-flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
						<div className="rounded-full bg-blue-100 p-2 sm:p-2.5 md:p-3">
							<Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" strokeWidth={2} />
						</div>
					</div>
					<h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-4">
						{solutionContent.title}
					</h2>
				</div>

				{/* Solution content */}
				<div className="mx-auto max-w-4xl">
					<div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8">
						{/* Product Name */}
						<div className="mb-4 sm:mb-5 md:mb-6">
							<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
								{solutionContent.productName}
							</h3>
							<p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
								{solutionContent.description}
							</p>
						</div>

						{/* How It Works */}
						<div className="border-t border-gray-200 pt-4 sm:pt-5 md:pt-6">
							<div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
								<Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" strokeWidth={2} />
								<p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
									{solutionContent.howItWorks}
								</p>
							</div>
						</div>

						{/* Key Point */}
						<div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
							<div className="flex items-start gap-2 sm:gap-3">
								<CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
								<p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
									{solutionContent.keyPoint}
								</p>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="text-center">
						<Link
							href="https://docs.google.com/forms/d/e/1FAIpQLSd4RabWcBBSRenuBIHphS-U795OahBIZPje4WW7GEovspEjjg/viewform?usp=header"
							onClick={() => fbq.initiateCheckout()}
							className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25"
						>
							Pelajari Lebih Lanjut
							<CheckCircle2 className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Solution;

