"use client";

import { Award, Video, MessageCircle, FileText, BookOpen } from "lucide-react";
import { features } from "../_contents/features-content";

const featureIcons = [
	Award,          // E-Sertifikat
	Video,          // Rekaman Video
	MessageCircle,  // Live Support WhatsApp
	FileText,       // Materi Workshop
];

export const Features = () => {
	return (
		<section
			id="features"
			className="relative overflow-hidden bg-white py-8 md:py-10"
		>
			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div className="mb-6 text-center">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl mb-2">
						{features.title}
					</h2>
					{features.subtitle && (
						<p className="text-base text-gray-600">
							{features.subtitle}
						</p>
					)}
				</div>

				{/* Features list - Format grid dengan icon tanpa angka */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6">
					{features.items.map((item, index) => {
						const IconComponent = featureIcons[index] || BookOpen;
						const isLastItem = index === features.items.length - 1;
						const isSecondLastItem = index === features.items.length - 2;
						const isEvenItems = features.items.length % 2 === 0;
						return (
							<div
								key={item.id}
								className={`pb-4 ${
									isLastItem
										? "border-b-0"
										: isSecondLastItem && isEvenItems
										? "border-b border-gray-200 md:border-b-0"
										: "border-b border-gray-200"
								}`}
							>
								<div className="flex items-start gap-3">
									{/* Icon */}
									<div className="flex-shrink-0 mt-0.5">
										<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50">
											<IconComponent className="h-4 w-4 text-teal-600" strokeWidth={2} />
										</div>
									</div>

									{/* Content */}
									<div className="flex-1">
										<h3 className="text-base font-semibold text-gray-900 mb-1.5">
											{item.category}
										</h3>
										<p className="text-sm text-gray-700 leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Features;
