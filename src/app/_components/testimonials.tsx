"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
	{
		id: "t1",
		quote:
			"Berhubung lagi cari referensi untuk jurnal, maka aplikasi ini sangat membantu sekali bagi saya.",
		author: "GOMGOM T. PANGARIBUAN",
		role: "Dosen",
		// institution: "Universitas Sumatera",
		image: "/images/testimoni/profile3.jpg",
	},
	{
		id: "t2",
		quote: "Sudah sangat bagus karena sesuai dengan kebutuhan.",
		author: "ABDUL JAMIL, S.E., M.M.",
		role: "Dosen",
		// institution: "Universitas Negeri Jakarta",
		image: "/images/testimoni/profile5.jpg",
	},
	{
		id: "t3",
		quote:
			"Pelatihan yg memberikan kontribusi bagi para dosen khususnya dosen pemula dlm penulisan artikel ilmiah. Ilmunya sangat bermanfaat. Materi course adlh pembelajaran baru bagi saya.",
		author: "LENNI YUNITA HARAHAP, M.P.d",
		role: "Dosen",
		// institution: "Universitas Medan",
		image: "/images/testimoni/profile6.jpg",
	},
	{
		id: "t4",
		quote:
			"Bagi saya, sangat bermanfaat khususnya dalam penyusunan karya-karya ilmiah dan banyak hal baru yang saya peroleh",
		author: "Ir. KHAIRUDDIN KARIM, S.T., MT",
		role: "Dosen",
		// institution: "Institut Teknologi Medan",
		image: "/images/testimoni/profile4.jpg",
	},
];

const SCROLL_VELOCITY = 1;

export const Testimonials = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setScrollPosition((prev) => {
				const newPosition = prev + SCROLL_VELOCITY;
				const maxScroll = testimonials.length * 160; // Assuming each card is 160px high
				return newPosition >= maxScroll ? 0 : newPosition;
			});
		}, 50);

		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="testimonials"
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
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
					{/* Left Column - Content */}
					<div className="flex flex-col justify-center">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
							Kisah Sukses{" "}
							<span className="text-blue-600">Alumni Kami</span>
						</h2>
						<p className="mt-3 text-base text-gray-600 sm:text-lg">
							Bergabung dengan ratusan dosen yang telah berhasil mempublikasikan
							karya penulisan ilmiah mereka melalui bimbingan kami.
						</p>
					</div>

					{/* Right Column - Testimonials - Compact height */}
					<div className="pointer-events-none relative h-[420px] overflow-hidden">
						<div
							className="absolute inset-0 space-y-3 px-2 pt-2 transition-transform duration-300"
							style={{ transform: `translateY(-${scrollPosition}px)` }}
						>
							{[...testimonials, ...testimonials].map((testimonial, index) => (
								<div
									key={`${testimonial.id}-${index}`}
									className="testimonial-card pointer-events-auto"
								>
									<div className="group relative overflow-hidden rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">
										{/* Content */}
										<div className="relative">
											{/* Quote */}
											<p className="text-sm leading-relaxed text-gray-600">
												{testimonial.quote}
											</p>

											{/* Author */}
											<div className="mt-3 flex items-center gap-3">
												<div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200/50">
													<Image
														src={testimonial.image}
														alt={testimonial.author}
														fill
														className="object-cover"
													/>
												</div>
												<div>
													<p className="text-sm font-semibold text-gray-900">
														{testimonial.author}
													</p>
													<p className="text-xs text-gray-600">
														{testimonial.role}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
