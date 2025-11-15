"use client";

import { CheckCircle2 } from "lucide-react";
import { benefitContent } from "../_contents/benefit-content";

export const Benefits = () => {
	return (
		<section
			id="benefits"
			className="relative overflow-hidden bg-gray-50 py-12 md:py-16 lg:py-20"
		>
			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div className="mb-10 text-center">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
						{benefitContent.title}
					</h2>
				</div>

				{/* Benefits list - Format dengan icon kecil tanpa card */}
				<div className="space-y-6">
					{benefitContent.items.map((benefit) => (
						<div key={benefit.id} className="flex items-start gap-4">
							{/* Icon kecil */}
							<div className="flex-shrink-0 mt-1">
								<CheckCircle2 className="h-5 w-5 text-teal-600" strokeWidth={2} />
							</div>

							{/* Content */}
							<div className="flex-1">
								<p className="text-base text-gray-800 leading-relaxed">
									{benefit.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Benefits;
