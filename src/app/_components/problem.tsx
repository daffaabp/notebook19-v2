"use client";

import { problemContent } from "../_contents/problem-content";

export const Problem = () => {
	return (
		<section
			id="problem"
			className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20"
		>
			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div className="mb-10 text-center">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl mb-3">
						{problemContent.title}
					</h2>
					<p className="text-base text-gray-600">
						{problemContent.opening}
					</p>
				</div>

				{/* Problems list - Format list tanpa card, fokus readability */}
				<div className="space-y-0">
					{problemContent.content.map((problem, index) => (
						<div
							key={problem.id}
							className="border-b border-gray-200 py-5 last:border-b-0"
						>
							<p className="text-base text-gray-800 leading-relaxed pl-6 relative">
								<span className="absolute left-0 text-red-600 font-semibold">•</span>
								{problem.text}
							</p>
						</div>
					))}
				</div>

				{/* Conclusion */}
				<div className="mt-8 pt-6 border-t-2 border-gray-300">
					<p className="text-base text-gray-800 leading-relaxed text-center font-medium">
						{problemContent.conclusion}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Problem;

