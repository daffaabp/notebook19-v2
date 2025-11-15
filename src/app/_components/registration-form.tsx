"use client";

import * as fbq from "@/lib/facebook-pixel";
import { supabase } from "@/lib/supabase";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		nama: "",
		email: "",
		whatsapp: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		setError(null);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		// Track Facebook Pixel event
		fbq.initiateCheckout();

		try {
			// Call Supabase Edge Function to create registration and payment
			const { data, error: functionError } = await supabase.functions.invoke('create-registration', {
				body: {
					name: formData.nama,
					email: formData.email,
					phone: formData.whatsapp,
				}
			});

			// Handle Supabase function error
			if (functionError) {
				console.error('Supabase function error:', functionError);
				
				// Check if it's a network/connection error
				if (functionError.message?.includes('fetch') || functionError.message?.includes('network') || functionError.message?.includes('Failed to fetch')) {
					throw new Error('Tidak dapat terhubung ke server. Pastikan koneksi internet Anda stabil dan coba lagi.');
				}
				
				// Check if function doesn't exist (404)
				if (functionError.message?.includes('not found') || functionError.message?.includes('404') || functionError.message?.includes('Function not found')) {
					throw new Error('Fungsi registrasi belum tersedia. Silakan hubungi administrator atau coba lagi nanti.');
				}
				
				// Check for non-2xx status code (this is the main error we're seeing)
				if (functionError.message?.includes('non-2xx') || functionError.message?.includes('status code') || functionError.message?.includes('Edge Function returned')) {
					// Try to get more details from the error
					const errorDetails = functionError.context?.status || functionError.context?.message || '';
					throw new Error(`Server mengalami masalah saat memproses registrasi. ${errorDetails ? `Detail: ${errorDetails}` : 'Silakan coba lagi atau hubungi support.'}`);
				}
				
				// Check for authentication errors
				if (functionError.message?.includes('401') || functionError.message?.includes('Unauthorized')) {
					throw new Error('Autentikasi gagal. Silakan refresh halaman dan coba lagi.');
				}
				
				// Check for server errors (500)
				if (functionError.message?.includes('500') || functionError.message?.includes('Internal Server Error')) {
					throw new Error('Server sedang mengalami masalah. Silakan coba lagi dalam beberapa saat.');
				}
				
				// Generic error message
				throw new Error(functionError.message || 'Gagal memproses registrasi. Silakan coba lagi.');
			}

			// Check if data exists
			if (!data) {
				throw new Error('Tidak ada respons dari server. Silakan coba lagi.');
			}

			// Check if registration was successful
			if (!data.success) {
				const errorMessage = data.error || data.message || 'Gagal memproses registrasi';
				throw new Error(errorMessage);
			}

			// Redirect to payment URL
			if (data.paymentUrl) {
				window.location.href = data.paymentUrl;
			} else {
				throw new Error('Payment URL tidak ditemukan. Silakan hubungi support.');
			}
		} catch (err) {
			console.error('Registration error:', err);
			
			// Extract error message
			let errorMessage = 'Terjadi kesalahan saat memproses registrasi.';
			
			if (err instanceof Error) {
				errorMessage = err.message;
			} else if (typeof err === 'string') {
				errorMessage = err;
			}
			
			setError(errorMessage);
			setIsSubmitting(false);
		}
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
							{error && (
								<div className="p-4 bg-red-50 border border-red-200 rounded-lg">
									<div className="flex items-start gap-2">
										<svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<div className="flex-1">
											<p className="text-sm font-medium text-red-800 mb-1">Terjadi Kesalahan</p>
											<p className="text-sm text-red-700">{error}</p>
											{process.env.NODE_ENV === 'development' && (
												<p className="text-xs text-red-600 mt-2 italic">
													Catatan: Pastikan Supabase Edge Function 'create-registration' sudah dibuat dan deployed.
												</p>
											)}
										</div>
									</div>
								</div>
							)}

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
									disabled={isSubmitting}
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
									disabled={isSubmitting}
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
									disabled={isSubmitting}
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
										<Loader2 className="h-5 w-5 animate-spin" />
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
								Dengan mendaftar, Anda menyetujui{" "}
								<Link
									href="/terms"
									className="text-blue-600 hover:text-blue-700 underline transition-colors"
								>
									Syarat dan Ketentuan
								</Link>
								{" "}dan{" "}
								<Link
									href="/privacy"
									className="text-blue-600 hover:text-blue-700 underline transition-colors"
								>
									Kebijakan Privasi
								</Link>
								{" "}yang berlaku.
							</p>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default RegistrationForm;

