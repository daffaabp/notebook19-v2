# Setup Payment Integration dengan Mayar

## Overview

Form registrasi sudah terintegrasi dengan Supabase Edge Functions dan payment gateway Mayar. Ketika user mengisi form dan klik "Daftar Sekarang", sistem akan:

1. Memanggil Supabase Edge Function `create-registration`
2. Edge Function membuat registrasi di database dan payment link di Mayar
3. User di-redirect ke payment URL dari Mayar
4. Setelah pembayaran, user di-redirect ke `/payment-pending?orderId=xxx`
5. Halaman payment-pending memverifikasi status pembayaran secara otomatis

## File yang Telah Dibuat

1. **`src/lib/supabase.ts`** - Supabase client configuration
2. **`src/app/_components/registration-form.tsx`** - Form registrasi yang sudah terintegrasi
3. **`src/app/payment-pending/page.tsx`** - Halaman verifikasi pembayaran

## Environment Variables

Buat file `.env.local` di root project dengan konfigurasi berikut:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://ehgzwngxthniadxoyfwd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoZ3p3bmd4dGhuaWFkeG95ZndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NDQ4NTcsImV4cCI6MjA3ODMyMDg1N30.mnOcauSfpAEGRGRgUDDRJurqpYyM-w374fnK1MpGXNI

# Mayar Payment Gateway Configuration (untuk Edge Functions)
MAYAR_API_KEY=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3NTRkNDc2Yi04MTY5LTRlMjAtOGU0NC04ZjcwNmRmNTI0MDkiLCJhY2NvdW50SWQiOiIwZjUyN2I4MS0yMzU4LTRkNzQtODI5NS00MjcyMDE1N2EwNmEiLCJjcmVhdGVkQXQiOiIxNzYyMjc1MzU5MzUwIiwicm9sZSI6ImRldmVsb3BlciIsInN1YiI6ImtlbGFzaW5vdmF0aWYxQGdtYWlsLmNvbSIsIm5hbWUiOiJLZWxhcyBJbm92YXRpZiIsImxpbmsiOiJrZWxhcy1pbm92YXRpZi1kYWZmYSIsImlzU2VsZkRvbWFpbiI6bnVsbCwiaWF0IjoxNzYyMjc1MzU5fQ.XmJULer-JQBUYM5k1zpYcEbodqURKuKVi7LW7Lb-65tO8flAmgoulrf3u9Qfu1TC9ikH9o8PeDo7v8o11yQx4sCw637oMoq7i-wBg2zamUH26Fi4hs8_FhEGpD6IlwiyjVfs-MoirzqvAqMdZBozRjwq2KUcj4TuUzQqrNCwVZwlY4axBTLWqdvoMgYV2PujzX46Cq1aQ_Yb6Hk0Jh23qoaEkEjx5whII4FexaoptMKPnjPr6WiskUjd1EoKGQYBsvLGQQguhSc37Mq3HWYw3vkf1-OYd0o7V4J0xRHrCQ1FoH0Qt3GQypy8zV5WMDJx4dHVRFpxqA040fro6tDKuQ
MAYAR_BASE_URL=https://api.mayar.club/hl/v1

# Application URL
APP_URL=http://localhost:3000
```

## Supabase Edge Functions yang Diperlukan

Pastikan Anda sudah membuat 2 Edge Functions di Supabase:

### 1. `create-registration`
Function ini akan:
- Menerima data registrasi (name, email, phone)
- Menyimpan data ke database
- Membuat payment link di Mayar
- Mengembalikan payment URL

**Expected Request Body:**
```json
{
  "name": "Nama Lengkap",
  "email": "email@example.com",
  "phone": "081234567890"
}
```

**Expected Response:**
```json
{
  "success": true,
  "paymentUrl": "https://payment.mayar.club/...",
  "orderId": "order-xxx"
}
```

### 2. `verify-payment`
Function ini akan:
- Menerima orderId
- Memverifikasi status pembayaran di Mayar
- Mengupdate status di database
- Mengembalikan status pembayaran

**Expected Request Body:**
```json
{
  "orderId": "order-xxx"
}
```

**Expected Response:**
```json
{
  "success": true,
  "status": "settlement",
  "isPaid": true,
  "message": "Pembayaran berhasil",
  "registration": {
    "name": "Nama Lengkap",
    "email": "email@example.com",
    "phone": "081234567890"
  }
}
```

## Flow Pembayaran

1. User mengisi form registrasi
2. Form memanggil `create-registration` Edge Function
3. User di-redirect ke payment URL dari Mayar
4. Setelah pembayaran, Mayar redirect ke `/payment-pending?orderId=xxx`
5. Halaman payment-pending memanggil `verify-payment` setiap 5 detik
6. Jika pembayaran berhasil, tampilkan konfirmasi

## Testing

1. Pastikan `.env.local` sudah dibuat dengan konfigurasi yang benar
2. Pastikan Supabase Edge Functions sudah dibuat dan deployed
3. Test form registrasi dengan data valid
4. Pastikan redirect ke payment URL berjalan dengan baik
5. Test halaman payment-pending dengan orderId yang valid

## Catatan Penting

- Pastikan Supabase Edge Functions sudah dibuat sesuai dokumentasi di `docs/connect-form-to-mayar.md`
- Environment variables untuk Mayar (MAYAR_API_KEY, MAYAR_BASE_URL) digunakan di Edge Functions, bukan di client
- Client hanya menggunakan NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY
- Halaman payment-pending akan auto-refresh setiap 5 detik jika status masih pending

