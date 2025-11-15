\lib\supabase.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ehgzwngxthniadxoyfwd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoZ3p3bmd4dGhuaWFkeG95ZndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NDQ4NTcsImV4cCI6MjA3ODMyMDg1N30.mnOcauSfpAEGRGRgUDDRJurqpYyM-w374fnK1MpGXNI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

###########

\components\registration-section.tsx

import React, { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { CheckCircle2, Calendar, Clock, MapPin, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    position: "",
    agreeToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Call Supabase Edge Function to create registration and payment
      const { data, error: functionError } = await supabase.functions.invoke('create-registration', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          institution: formData.institution,
          position: formData.position
        }
      });

      if (functionError) {
        throw new Error(functionError.message || 'Gagal memproses registrasi');
      }

      if (!data.success) {
        throw new Error(data.error || 'Gagal memproses registrasi');
      }

      // Redirect to payment URL
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        throw new Error('Payment URL tidak ditemukan');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat memproses registrasi');
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  return (
    <section id="registration" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Information */}
          <div className="space-y-8">
            {/* Closing Hook */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <h2 
                className="text-xl sm:text-2xl lg:text-3xl text-slate-900 mb-4 font-bold"
                style={{ fontWeight: 900 }}
              >
                Saatnya Ambil Keputusan
              </h2>
              
              <div className="space-y-3 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Setelah melihat semua yang sudah kami sampaikan, <span className="font-semibold">ini saatnya Anda bertindak.</span> Setiap detik yang Anda tunggu, kesempatan publikasi semakin dekat dengan deadline.
                </p>
                
                <p>
                  <span className="font-semibold">Pikirkan ini:</span> <span className="text-blue-600 font-bold">500+ dosen dan peneliti</span> sudah merasakan perubahan setelah mengikuti workshop ini. Mereka yang dulu frustrasi, sekarang sudah punya sistem yang jelas.
                </p>
                
                <p className="text-lg sm:text-xl font-semibold text-slate-900 pt-2">
                  <span className="text-blue-600">Anda bisa jadi yang berikutnya.</span>
                </p>
                
                <p className="text-base sm:text-lg font-medium text-slate-800 pt-2">
                  Mulai perjalanan Anda sekarang. Isi formulir di sebelah kanan dan ambil langkah pertama menuju publikasi yang sukses.
                </p>
              </div>
            </div>

            {/* Event Details Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 
                className="text-xl text-slate-900 mb-6 font-bold"
                style={{ fontWeight: 900 }}
              >
                Detail Acara
              </h3>
              <div className="space-y-4">
                <div className="mb-4 pb-4 border-b border-slate-200">
                  <p className="text-sm text-slate-500 font-medium mb-2">Nama Event</p>
                  <p className="text-lg text-slate-900 font-semibold">Rahasia Memilih Jurnal Scopus yang Tepat untuk Publikasi Anda</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Tanggal</p>
                    <p className="text-base text-slate-900 font-medium">Jumat, 14 November 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Waktu</p>
                    <p className="text-base text-slate-900 font-medium">19.00 - 21.00 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Platform</p>
                    <p className="text-base text-slate-900 font-medium">Zoom Meeting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Registration Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              {/* Slot Counter */}

              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <h3 
                  className="text-2xl lg:text-3xl mb-2 font-bold"
                  style={{ fontWeight: 900 }}
                >
                  Formulir Pendaftaran
                </h3>
                <p className="text-blue-100 font-medium">Isi data Anda dengan lengkap</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl text-slate-900 mb-2">Pendaftaran Berhasil!</h4>
                    <p className="text-slate-600">Link webinar akan dikirim ke email Anda</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Contoh: Dr. Ahmad Santoso, M.Sc."
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@institusi.ac.id"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="08xx xxxx xxxx"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution">Institusi/Universitas *</Label>
                      <Input
                        id="institution"
                        type="text"
                        placeholder="Nama institusi Anda"
                        value={formData.institution}
                        onChange={(e) => handleChange("institution", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Posisi/Status *</Label>
                      <Select
                        value={formData.position}
                        onValueChange={(value) => handleChange("position", value)}
                        required
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Pilih posisi Anda" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dosen">Dosen</SelectItem>
                          <SelectItem value="mahasiswa-s1">Mahasiswa S1</SelectItem>
                          <SelectItem value="mahasiswa-s2">Mahasiswa S2</SelectItem>
                          <SelectItem value="mahasiswa-s3">Mahasiswa S3</SelectItem>
                          <SelectItem value="peneliti">Peneliti</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleChange("agreeToTerms", checked as boolean)}
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                        Saya setuju untuk menerima informasi webinar dan materi terkait publikasi ilmiah melalui email dan WhatsApp. Saya juga telah membaca dan menyetujui{" "}
                        <a 
                          href="/terms-of-service" 
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 hover:text-blue-700 underline font-medium"
                        >
                          Syarat & Ketentuan
                        </a>{" "}
                        dan{" "}
                        <a 
                          href="/privacy-policy" 
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 hover:text-blue-700 underline font-medium"
                        >
                          Kebijakan Privasi
                        </a>.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all"
                      disabled={!formData.agreeToTerms || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Memproses...
                        </>
                      ) : (
                        "Daftar Sekarang - HANYA Rp. 69,000"
                      )}
                    </Button>

                    <p className="text-xs text-center text-slate-500">
                      Data Anda aman dan tidak akan dibagikan kepada pihak ketiga
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



#######


env

MAYAR_API_KEY="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3NTRkNDc2Yi04MTY5LTRlMjAtOGU0NC04ZjcwNmRmNTI0MDkiLCJhY2NvdW50SWQiOiIwZjUyN2I4MS0yMzU4LTRkNzQtODI5NS00MjcyMDE1N2EwNmEiLCJjcmVhdGVkQXQiOiIxNzYyMjc1MzU5MzUwIiwicm9sZSI6ImRldmVsb3BlciIsInN1YiI6ImtlbGFzaW5vdmF0aWYxQGdtYWlsLmNvbSIsIm5hbWUiOiJLZWxhcyBJbm92YXRpZiIsImxpbmsiOiJrZWxhcy1pbm92YXRpZi1kYWZmYSIsImlzU2VsZkRvbWFpbiI6bnVsbCwiaWF0IjoxNzYyMjc1MzU5fQ.XmJULer-JQBUYM5k1zpYcEbodqURKuKVi7LW7Lb-65tO8flAmgoulrf3u9Qfu1TC9ikH9o8PeDo7v8o11yQx4sCw637oMoq7i-wBg2zamUH26Fi4hs8_FhEGpD6IlwiyjVfs-MoirzqvAqMdZBozRjwq2KUcj4TuUzQqrNCwVZwlY4axBTLWqdvoMgYV2PujzX46Cq1aQ_Yb6Hk0Jh23qoaEkEjx5whII4FexaoptMKPnjPr6WiskUjd1EoKGQYBsvLGQQguhSc37Mq3HWYw3vkf1-OYd0o7V4J0xRHrCQ1FoH0Qt3GQypy8zV5WMDJx4dHVRFpxqA040fro6tDKuQ"
MAYAR_BASE_URL=https://api.mayar.club/hl/v1
APP_URL=http://localhost:3000



##########

src\components\payment-pending.tsx

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle2, Clock, XCircle, Loader2, RefreshCw } from "lucide-react";
import { supabase } from "../lib/supabase";

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

export function PaymentPending() {
  const [status, setStatus] = useState<PaymentStatus>("checking");
  const [message, setMessage] = useState("Memeriksa status pembayaran...");
  const [registration, setRegistration] = useState<VerifyPaymentResponse["registration"] | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  // Get orderId from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");

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
    verifyPayment();
    
    // Auto-refresh every 5 seconds if still pending
    const interval = setInterval(() => {
      if (status === "pending" || status === "checking") {
        verifyPayment();
      }
    }, 5000);

    return () => clearInterval(interval);
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
                <span>Link Zoom webinar akan dikirim ke email Anda maksimal H-1 acara</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>E-Sertifikat akan dikirim setelah webinar selesai</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Recording webinar dapat diakses melalui link yang akan diberikan</span>
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
            <Button
              onClick={verifyPayment}
              disabled={isVerifying}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Memeriksa...
                </>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Refresh Status
                </>
              )}
            </Button>
          )}

          {status === "settlement" && (
            <Button
              onClick={() => window.location.href = "/"}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Kembali ke Beranda
            </Button>
          )}

          {(status === "expire" || status === "cancel" || status === "deny") && (
            <Button
              onClick={() => window.location.href = "/"}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Daftar Ulang
            </Button>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-sm text-center text-slate-500">
            Butuh bantuan? Hubungi kami melalui WhatsApp di <strong>0812-3456-7890</strong>
          </p>
        </div>
      </div>
    </div>
  );
}


