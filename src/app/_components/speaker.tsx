"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const stats = [
	{ id: "experience", value: "10+", label: "Tahun Pengalaman" },
	{ id: "projects", value: "195+", label: "Proyek AI" },
];

const achievements = [
	{ id: "founder", text: "Pembina Kelas Inovatif" },
	{ id: "mentor", text: "Mentor 3000+ Akademisi" },
	{ id: "expert", text: "AI Engineer & Konsultan" },
];

export const Speaker = () => {
	return (
		<section id="speakers" className="relative bg-gradient-to-b from-white to-gray-50/50 py-12 md:py-16 overflow-hidden">
			{/* Background decoration */}
			<div className="pointer-events-none absolute inset-0">
				{/* Gradient Orbs */}
				<div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
				<div className="absolute right-1/4 top-3/4 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-4xl px-4">
				{/* Header */}
				<div className="text-center mb-6">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
						Pembicara Utama
					</h2>
					<p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
						Pelajari langsung dari pembina komunitas yang telah membantu 3000+ akademisi berhasil
					</p>
				</div>

				{/* Speaker Content - Compact design */}
				<div className="relative">
					<div className="relative bg-white rounded-xl shadow-lg border-l-4 border-blue-500 p-6">
						<div className="flex flex-col items-center md:flex-row md:items-start md:gap-6">
							{/* Image */}
							<div className="relative mx-auto w-40 md:w-48 flex-shrink-0 overflow-hidden rounded-xl md:mx-0">
								<Image
									src="/images/arianto.jpg"
									alt="M. Arianto"
									width={300}
									height={400}
									className="h-full w-full object-cover"
								/>
							</div>

							{/* Content */}
							<div className="mt-4 text-center md:text-left md:mt-0 flex-1">
								{/* Name and Role */}
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900">
									M. Arianto
								</h3>
								<div className="mt-1">
									<span className="text-lg text-blue-600 font-semibold">
										Pembina Komunitas Kelas Inovatif
									</span>
								</div>

								{/* Stats - Compact inline */}
								<div className="mt-4 flex justify-center md:justify-start gap-6">
									{stats.map((stat) => (
										<div key={stat.id} className="text-center">
											<div className="text-2xl md:text-3xl font-bold text-gray-900">
												{stat.value}
											</div>
											<div className="text-sm text-gray-600 mt-0.5">
												{stat.label}
											</div>
										</div>
									))}
								</div>

								{/* Achievements - Compact */}
								<div className="mt-4 space-y-2">
									{achievements.map((achievement) => (
										<div
											key={achievement.id}
											className="flex items-center justify-center md:justify-start gap-2 group hover:transform hover:translate-x-1 transition-all duration-200"
										>
											<Star className="h-4 w-4 text-blue-600 fill-current" />
											<span className="text-base text-gray-700 font-medium">
												{achievement.text}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Speaker;
