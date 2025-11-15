"use client";

import Image from "next/image";
import { heroContent } from "../_contents/hero-content";

export const Hero = () => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-12 md:py-16 lg:py-20">
			{/* Background Elements */}
			<div className="pointer-events-none absolute inset-0">
				{/* Gradient Orbs */}
				<div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
				<div className="absolute right-1/4 top-3/4 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

				{/* Grid Pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			{/* Content Container */}
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Grid Layout - Responsive */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Left Column - Content (Mobile: First, Desktop: Left) */}
					<div className="order-1 lg:order-1">
						{/* Biggest Goal Section - Optimized for Readability */}
						<div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
							{/* Headline - Biggest Goal Title */}
							<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] mb-6">
								{heroContent.biggestGoal.title}
							</h1>

							{/* Hook - Subheadline (2 kalimat untuk readability optimal) */}
							<div className="space-y-5">
								{heroContent.biggestGoal.hook.map((sentence, index) => (
									<p
										key={index}
										className="text-base text-gray-700 sm:text-lg md:text-xl lg:text-xl leading-[1.8] font-normal"
										style={{
											letterSpacing: "0.01em",
											wordSpacing: "0.05em",
										}}
									>
										{sentence}
									</p>
								))}
							</div>
						</div>
					</div>

					{/* Right Column - Banner Image (Mobile: Second, Desktop: Right) */}
					<div className="order-2 lg:order-2 relative">
						<div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-full overflow-hidden rounded-xl shadow-lg border-2 border-gray-200 bg-white">
							<Image
								src={heroContent.image.src}
								alt={heroContent.image.alt}
								fill
								className="object-cover"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
