"use client";

import * as fbq from "@/lib/facebook-pixel";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		nama: "",
		email: "",
		whatsapp: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Track Facebook Pixel event
		fbq.initiateCheckout();

		// Redirect to Google Forms with pre-filled data
		const googleFormUrl = new URL(
			"https://docs.google.com/forms/d/e/1FAIpQLSd4RabWcBBSRenuBIHphS-U795OahBIZPje4WW7GEovspEjjg/viewform"
		);
		
		// Note: Google Forms doesn't support direct pre-filling via URL parameters easily
		// So we'll just redirect to the form
		window.open(googleFormUrl.toString(), "_blank");

		setIsSubmitting(false);
		setIsSubmitted(true);

		// Reset form after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({ nama: "", email: "", whatsapp: "" });
		}, 3000);
	};

	return (
		<section
			id="registration"
			className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12 md:py-16"
		>
			<div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div className="mb-8 text-center">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl mb-2">
						Daftar Workshop Sekarang
					</h2>
					<p className="text-base text-gray-600">
						Isi formulir di bawah ini untuk mendaftar workshop. Kami akan mengirimkan konfirmasi melalui WhatsApp.
					</p>
				</div>

				{/* Registration Form */}
				<div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
					{isSubmitted ? (
						<div className="text-center py-8">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
								<svg
									className="w-8 h-8 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Terima Kasih!
							</h3>
							<p className="text-base text-gray-600">
								Formulir pendaftaran akan dibuka di tab baru. Silakan lengkapi data Anda di sana.
							</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-5">
							{/* Nama Field */}
							<div>
								<label
									htmlFor="nama"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Nama Lengkap <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="nama"
									name="nama"
									required
									value={formData.nama}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
									placeholder="Masukkan nama lengkap Anda"
								/>
							</div>

							{/* Email Field */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email <span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
									placeholder="nama@email.com"
								/>
							</div>

							{/* WhatsApp Field */}
							<div>
								<label
									htmlFor="whatsapp"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Nomor WhatsApp <span className="text-red-500">*</span>
								</label>
								<input
									type="tel"
									id="whatsapp"
									name="whatsapp"
									required
									value={formData.whatsapp}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
									placeholder="08xxxxxxxxxx"
									pattern="[0-9]{10,13}"
								/>
								<p className="mt-1 text-xs text-gray-500">
									Contoh: 081234567890
								</p>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
							>
								{isSubmitting ? (
									<>
										<svg
											className="animate-spin h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Memproses...
									</>
								) : (
									<>
										Daftar Sekarang
										<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
									</>
								)}
							</button>

							<p className="text-xs text-center text-gray-500">
								Dengan mendaftar, Anda menyetujui syarat dan ketentuan yang berlaku.
							</p>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default RegistrationForm;

