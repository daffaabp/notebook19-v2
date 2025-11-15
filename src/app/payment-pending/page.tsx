"use client";

import { supabase } from "@/lib/supabase";
import { CheckCircle2, Clock, XCircle, Loader2, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

type PaymentStatus = "pending" | "settlement" | "expire" | "cancel" | "deny" | "checking";

interface VerifyPaymentResponse {
	success: boolean;
	status: PaymentStatus;
	isPaid: boolean;
	message: string;
	registration?: {
		name: string;
		email: string;
		phone: string;
	};
}

export default function PaymentPendingPage() {
	const [status, setStatus] = useState<PaymentStatus>("checking");
	const [message, setMessage] = useState("Memeriksa status pembayaran...");
	const [registration, setRegistration] = useState<VerifyPaymentResponse["registration"] | null>(null);
	const [isVerifying, setIsVerifying] = useState(false);

	// Get orderId from URL params
	const [orderId, setOrderId] = useState<string | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const urlParams = new URLSearchParams(window.location.search);
			const id = urlParams.get("orderId");
			setOrderId(id);
		}
	}, []);

	const verifyPayment = async () => {
		if (!orderId) {
			setStatus("deny");
			setMessage("Order ID tidak ditemukan");
			return;
		}

		setIsVerifying(true);
		try {
			const { data, error } = await supabase.functions.invoke('verify-payment', {
				body: { orderId }
			});

			if (error) {
				throw new Error(error.message);
			}

			const result: VerifyPaymentResponse = data;

			setStatus(result.status);
			setMessage(result.message);

			if (result.isPaid && result.registration) {
				setRegistration(result.registration);
			}
		} catch (err) {
			console.error("Verification error:", err);
			setStatus("deny");
			setMessage(err instanceof Error ? err.message : "Gagal memverifikasi pembayaran");
		} finally {
			setIsVerifying(false);
		}
	};

	useEffect(() => {
		if (orderId) {
			verifyPayment();

			// Auto-refresh every 5 seconds if still pending
			const interval = setInterval(() => {
				if (status === "pending" || status === "checking") {
					verifyPayment();
				}
			}, 5000);

			return () => clearInterval(interval);
		}
	}, [orderId]);

	const renderStatusIcon = () => {
		switch (status) {
			case "settlement":
				return (
					<div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
						<CheckCircle2 className="w-10 h-10 text-green-600" />
					</div>
				);
			case "pending":
			case "checking":
				return (
					<div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
						<Clock className="w-10 h-10 text-blue-600" />
					</div>
				);
			case "expire":
			case "cancel":
			case "deny":
				return (
					<div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
						<XCircle className="w-10 h-10 text-red-600" />
					</div>
				);
		}
	};

	const renderTitle = () => {
		switch (status) {
			case "settlement":
				return "Pembayaran Berhasil! 🎉";
			case "pending":
				return "Menunggu Pembayaran";
			case "checking":
				return "Memeriksa Status Pembayaran...";
			case "expire":
				return "Pembayaran Kedaluwarsa";
			case "cancel":
				return "Pembayaran Dibatalkan";
			case "deny":
				return "Pembayaran Gagal";
		}
	};

	const getStatusColor = () => {
		switch (status) {
			case "settlement":
				return "text-green-600";
			case "pending":
			case "checking":
				return "text-blue-600";
			default:
				return "text-red-600";
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
			<div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 lg:p-12">
				{renderStatusIcon()}

				<h1
					className={`text-3xl lg:text-4xl font-bold text-center mb-4 ${getStatusColor()}`}
					style={{ fontWeight: 900 }}
				>
					{renderTitle()}
				</h1>

				<p className="text-center text-slate-600 mb-8 text-lg">
					{message}
				</p>

				{status === "settlement" && registration && (
					<div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
						<h3
							className="font-bold text-green-900 mb-3"
							style={{ fontWeight: 900 }}
						>
							Detail Registrasi:
						</h3>
						<div className="space-y-2 text-sm text-green-800">
							<p><strong>Nama:</strong> {registration.name}</p>
							<p><strong>Email:</strong> {registration.email}</p>
							<p><strong>WhatsApp:</strong> {registration.phone}</p>
						</div>
					</div>
				)}

				{status === "settlement" && (
					<div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
						<h3
							className="font-bold text-blue-900 mb-3"
							style={{ fontWeight: 900 }}
						>
							Langkah Selanjutnya:
						</h3>
						<ul className="space-y-2 text-sm text-blue-800">
							<li className="flex items-start gap-2">
								<CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
								<span>Link Zoom workshop akan dikirim ke email Anda maksimal H-1 acara</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
								<span>E-Sertifikat akan dikirim setelah workshop selesai</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
								<span>Recording workshop dapat diakses melalui link yang akan diberikan</span>
							</li>
						</ul>
					</div>
				)}

				{status === "pending" && (
					<div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
						<p className="text-sm text-blue-800 text-center">
							Halaman ini akan otomatis diperbarui setiap 5 detik. Silakan selesaikan pembayaran Anda terlebih dahulu.
						</p>
					</div>
				)}

				{(status === "expire" || status === "cancel" || status === "deny") && (
					<div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
						<p className="text-sm text-red-800 text-center">
							Silakan kembali ke halaman pendaftaran dan daftar ulang untuk mendapatkan link pembayaran baru.
						</p>
					</div>
				)}

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					{status === "pending" && (
						<button
							onClick={verifyPayment}
							disabled={isVerifying}
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isVerifying ? (
								<>
									<Loader2 className="w-5 h-5 animate-spin" />
									Memeriksa...
								</>
							) : (
								<>
									<RefreshCw className="w-5 h-5" />
									Refresh Status
								</>
							)}
						</button>
					)}

					{status === "settlement" && (
						<button
							onClick={() => window.location.href = "/"}
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors"
						>
							Kembali ke Beranda
						</button>
					)}

					{(status === "expire" || status === "cancel" || status === "deny") && (
						<button
							onClick={() => window.location.href = "/#registration"}
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors"
						>
							Daftar Ulang
						</button>
					)}
				</div>

				<div className="mt-8 pt-6 border-t border-slate-200">
					<p className="text-sm text-center text-slate-500">
						Butuh bantuan? Hubungi kami melalui WhatsApp di <strong>+62857-1220-8535</strong>
					</p>
				</div>
			</div>
		</div>
	);
}

