"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { faqContent } from "../_contents/faq-content";

export const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			id="faq"
			className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-12 md:py-16 lg:py-20"
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
				<div className="mx-auto max-w-3xl text-center mb-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
						{faqContent.title}
					</h2>
				</div>

				{/* FAQ Items - Grid layout untuk compact */}
				<div className="mx-auto max-w-5xl">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{faqContent.items.map((item, index) => (
							<div
								key={item.id}
								className="bg-white rounded-lg border-l-4 border-blue-500 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
							>
								{/* Question */}
								<button
									type="button"
									onClick={() => toggleFAQ(index)}
									className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-gray-50 transition-colors duration-200"
									aria-expanded={openIndex === index}
								>
									<span className="text-base font-semibold text-gray-900 pr-2">
										{item.question}
									</span>
									<ChevronDown
										className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
											openIndex === index ? "rotate-180" : ""
										}`}
									/>
								</button>

								{/* Answer */}
								<div
									className={`overflow-hidden transition-all duration-300 ${
										openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
									}`}
								>
									<div className="px-4 pb-4 pt-0">
										<p className="text-sm text-gray-700 leading-relaxed">
											{item.answer}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;

