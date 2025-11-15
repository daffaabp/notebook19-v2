"use client";

import { ArrowRight, Gift, Sparkles } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import * as fbq from "@/lib/facebook-pixel";
import { specialOfferContent, closingStatementContent } from "../_contents/support-content";

export const Support = () => {

	return (
		<section
			id="support"
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
				{/* Preview Section */}
				<div className="mx-auto max-w-3xl">
					<div className="transition-all duration-300 translate-y-0 opacity-100">
						<h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
							Lihat Preview Workshop Kami
						</h2>

						{/* Video Preview */}
						<div className="relative w-full overflow-hidden rounded-xl shadow-lg">
							<div className="relative pt-[56.25%]">
								<iframe
									className="absolute inset-0 w-full h-full"
									src="https://www.youtube.com/embed/hOx84iNHLjM?rel=0&modestbranding=1"
									title="Preview Workshop"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						</div>

						{/* Desktop Preview Grid */}
						{/* <div className="hidden md:grid grid-cols-3 gap-4 mt-8">
							{previewImages.map((image) => (
								<button
									key={image.id}
									type="button"
									onClick={() =>
										setActiveImageIndex(
											previewImages.findIndex((img) => img.id === image.id),
										)
									}
									className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300"
								>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-100 opacity-0 flex items-center justify-center">
										<ZoomIn className="w-6 h-6 text-white" />
									</div>
								</button>
							))}
						</div> */}

						{/* Mobile Preview Carousel */}
						{/* <div className="md:hidden mt-8">
							<Swiper
								modules={[Pagination, Autoplay]}
								spaceBetween={16}
								slidesPerView={1}
								pagination={{ clickable: true }}
								autoplay={{ delay: 5000 }}
								className="w-full aspect-video"
							>
								{previewImages.map((image) => (
									<SwiperSlide key={image.id}>
										<div className="relative w-full h-full rounded-xl overflow-hidden">
											<Image
												src={image.src}
												alt={image.alt}
												fill
												className="object-cover"
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div> */}

						{/* Image Preview Modal */}
						{/* <Transition show={activeImageIndex !== null} as={Fragment}>
							<Dialog
								as="div"
								className="fixed inset-0 z-50 overflow-y-auto"
								onClose={() => setActiveImageIndex(null)}
							>
								<div className="min-h-screen px-4 text-center">
									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="fixed inset-0 bg-black/75 transition-opacity" />
									</Transition.Child>

									<span
										className="inline-block h-screen align-middle"
										aria-hidden="true"
									>
										&#8203;
									</span>

									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<Dialog.Panel className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
											<div className="relative aspect-video">
												{activeImageIndex !== null && (
													<Image
														src={previewImages[activeImageIndex].src}
														alt={previewImages[activeImageIndex].alt}
														fill
														className="object-contain"
													/>
												)}

												<button
													type="button"
													onClick={() => {
														if (activeImageIndex !== null) {
															setActiveImageIndex(
																(activeImageIndex - 1 + previewImages.length) %
																	previewImages.length,
															);
														}
													}}
													className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
												>
													<ChevronLeft className="w-6 h-6 text-white" />
												</button>

												<button
													type="button"
													onClick={() => {
														if (activeImageIndex !== null) {
															setActiveImageIndex(
																(activeImageIndex + 1) % previewImages.length,
															);
														}
													}}
													className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
												>
													<ChevronRight className="w-6 h-6 text-white" />
												</button>
											</div>

											<div className="mt-4 text-center text-sm text-gray-600">
												{activeImageIndex !== null &&
													previewImages[activeImageIndex].alt}
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</Dialog>
						</Transition> */}
					</div>

					{/* Special Offer Section - Compact design */}
					<div className="mt-12 mb-12">
						<div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl border-l-4 border-blue-500 p-6 shadow-lg">
							<div className="text-center mb-6">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
									{specialOfferContent.title}
								</h3>
							</div>

							{/* Price Comparison - Compact inline */}
							<div className="flex flex-wrap items-center justify-center gap-4 mb-6">
								<div className="text-center">
									<p className="text-sm text-gray-600 mb-1">Harga normal:</p>
									<p className="text-xl text-gray-500 line-through">
										{specialOfferContent.normalPrice}
									</p>
								</div>
								<div className="text-center">
									<p className="text-sm text-gray-600 mb-1">Sekarang:</p>
									<p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
										{specialOfferContent.currentPrice}
									</p>
								</div>
							</div>

							{/* Bonus List - Grid layout */}
							<div className="mb-6">
								<p className="text-lg font-semibold text-gray-900 mb-3 text-center">
									Bonus yang akan Anda dapatkan:
								</p>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto">
									{specialOfferContent.bonus.map((bonus, index) => (
										<div key={index} className="flex items-start gap-2">
											<Sparkles className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
											<span className="text-sm text-gray-700">{bonus}</span>
										</div>
									))}
								</div>
							</div>

							{/* CTA */}
							<div className="text-center">
								<Link
									href="#registration"
									onClick={(e) => {
										e.preventDefault();
										fbq.initiateCheckout();
										const element = document.querySelector("#registration");
										if (element) {
											const offsetTop =
												element.getBoundingClientRect().top + window.pageYOffset - 80;
											window.scrollTo({
												top: offsetTop,
												behavior: "smooth",
											});
										}
									}}
									className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25"
								>
									{specialOfferContent.cta.text}
									<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
								</Link>
								<p className="mt-4 text-sm font-semibold text-red-600">
									{specialOfferContent.urgency}
								</p>
							</div>
						</div>
					</div>

					{/* Closing Statement - Compact design */}
					<div className="mt-12 mb-8">
						<div className="text-center">
							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
								{closingStatementContent.title}
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
								{closingStatementContent.visualization.map((item, index) => (
									<div key={index} className="flex items-start gap-2 text-left">
										<Sparkles className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
										<span className="text-base text-gray-700">{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Support;
