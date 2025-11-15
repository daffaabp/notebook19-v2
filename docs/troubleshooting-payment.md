# Troubleshooting Payment Integration

## Error: "Edge Function returned a non-2xx status code"

Error ini terjadi ketika Supabase Edge Function mengembalikan status code yang bukan 2xx (bukan success). Berikut langkah-langkah untuk mengatasi:

### 1. Pastikan Edge Function Sudah Dibuat dan Deployed

Edge Function `create-registration` harus dibuat di Supabase terlebih dahulu. 

**Cara membuat Edge Function di Supabase:**

1. Login ke [Supabase Dashboard](https://app.supabase.com)
2. Pilih project Anda
3. Pergi ke **Edge Functions** di sidebar
4. Klik **Create a new function**
5. Beri nama: `create-registration`
6. Copy-paste kode Edge Function sesuai dokumentasi di `docs/connect-form-to-mayar.md`
7. Deploy function tersebut

### 2. Pastikan Environment Variables Sudah Dikonfigurasi

Pastikan file `.env.local` sudah dibuat dengan konfigurasi yang benar:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ehgzwngxthniadxoyfwd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Catatan:** Restart development server setelah membuat/mengubah `.env.local`:
```bash
# Stop server (Ctrl+C)
# Start lagi
pnpm dev
```

### 3. Cek Logs Edge Function

Jika Edge Function sudah dibuat, cek logs untuk melihat error yang terjadi:

1. Buka Supabase Dashboard
2. Pergi ke **Edge Functions** > **create-registration**
3. Klik tab **Logs**
4. Lihat error yang muncul saat function dipanggil

### 4. Pastikan Request Body Sesuai

Edge Function mengharapkan request body dengan format:
```json
{
  "name": "Nama Lengkap",
  "email": "email@example.com",
  "phone": "081234567890"
}
```

Pastikan form mengirim data dengan field yang benar:
- `name` (bukan `nama`)
- `email`
- `phone` (bukan `whatsapp`)

### 5. Cek Mayar API Configuration di Edge Function

Pastikan Edge Function sudah dikonfigurasi dengan:
- `MAYAR_API_KEY` - API key dari Mayar
- `MAYAR_BASE_URL` - Base URL Mayar API
- `APP_URL` - URL aplikasi untuk callback

Environment variables ini harus di-set di Supabase Dashboard:
1. Pergi ke **Project Settings** > **Edge Functions**
2. Tambahkan secrets:
   - `MAYAR_API_KEY`
   - `MAYAR_BASE_URL`
   - `APP_URL`

### 6. Test Edge Function Langsung

Anda bisa test Edge Function langsung dari Supabase Dashboard:

1. Pergi ke **Edge Functions** > **create-registration**
2. Klik **Invoke function**
3. Masukkan test body:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "081234567890"
}
```
4. Klik **Invoke**
5. Lihat response yang dikembalikan

### 7. Common Errors dan Solusinya

#### Error: "Function not found" atau 404
**Solusi:** Edge Function belum dibuat atau belum deployed. Buat dan deploy Edge Function terlebih dahulu.

#### Error: "Unauthorized" atau 401
**Solusi:** 
- Pastikan `NEXT_PUBLIC_SUPABASE_ANON_KEY` benar
- Pastikan Edge Function tidak memerlukan authentication khusus

#### Error: "Internal Server Error" atau 500
**Solusi:**
- Cek logs Edge Function untuk detail error
- Pastikan Mayar API credentials benar
- Pastikan semua environment variables di-set dengan benar

#### Error: "Payment URL tidak ditemukan"
**Solusi:**
- Pastikan Edge Function mengembalikan `paymentUrl` dalam response
- Cek apakah Mayar API berhasil membuat payment link
- Pastikan response format sesuai: `{ success: true, paymentUrl: "..." }`

### 8. Debug Mode

Untuk melihat detail error lebih lengkap, buka browser console (F12) dan lihat error yang muncul. Error handling yang sudah diperbaiki akan menampilkan pesan error yang lebih informatif.

### 9. Fallback untuk Development

Jika Edge Function belum tersedia dan Anda ingin test form tanpa payment:

1. Comment out bagian yang memanggil Edge Function
2. Gunakan mock response untuk testing:
```typescript
// Temporary mock for testing
const mockResponse = {
  success: true,
  paymentUrl: "https://payment.mayar.club/test",
  orderId: "test-order-123"
};
```

**Catatan:** Jangan commit mock code ini ke production!

### 10. Checklist Sebelum Testing

- [ ] Edge Function `create-registration` sudah dibuat dan deployed
- [ ] Edge Function `verify-payment` sudah dibuat dan deployed
- [ ] File `.env.local` sudah dibuat dengan konfigurasi yang benar
- [ ] Development server sudah di-restart setelah membuat `.env.local`
- [ ] Mayar API credentials sudah di-set di Supabase Edge Function secrets
- [ ] Test Edge Function langsung dari Supabase Dashboard berhasil
- [ ] Browser console tidak menunjukkan error lain

### Bantuan Lebih Lanjut

Jika masalah masih terjadi setelah mengikuti langkah-langkah di atas:
1. Cek Supabase Edge Function logs untuk detail error
2. Pastikan semua environment variables sudah benar
3. Test Edge Function langsung dari Supabase Dashboard
4. Hubungi support jika diperlukan

