# Dokumentasi Konten Framework Detail

## Ringkasan Perubahan

Konten landing page telah disesuaikan dengan **Framework Detail** dari `winning.md`. Framework ini dirancang untuk produk digital atau produk mahal yang butuh penjelasan runut dan menyeluruh.

## Struktur Konten Baru (Sesuai Framework)

### 1. Biggest Goal ✅
**File:** `src/app/_contents/hero-content.ts`

- **Title:** "Bantu Dosen & Mahasiswa Menyelesaikan Karya Ilmiah Berkualitas"
- **Hook:** "Lolos Turnitin di bawah 20%, terbebas dari AI Detector, dan publikasi jurnal terindeks — tanpa repot cari-cari referensi atau khawatir plagiasi."

**Implementasi:** Sudah ditambahkan di komponen Hero sebagai heading utama.

---

### 2. Problem ✅
**File:** `src/app/_contents/problem-content.ts` (BARU)

Berisi 5 masalah utama dengan bahasa sehari-hari:
1. Bingung cari novelty dan gap riset original
2. Hasil Turnitin di atas 20% atau terdeteksi AI Detector
3. Referensi jurnal kurang berkualitas
4. Takut pakai AI karena khawatir ketahuan
5. Framework tidak terstruktur, olah data manual

**Status:** File sudah dibuat, perlu dibuat komponen untuk menampilkannya.

---

### 3. Solution ✅
**File:** `src/app/_contents/solution-content.ts` (BARU)

- **Product Name:** "Workshop Nasional Teknik Parafrase dan Penulisan Akademik yang Beretika"
- **Description:** Panduan praktis yang bantu dosen dan mahasiswa menyelesaikan karya ilmiah berkualitas dengan bantuan AI
- **How It Works:** Live demo langsung, framework terstruktur, akses tools AI
- **Key Point:** 945+ alumni, 99% kelulusan sidang

**Status:** File sudah dibuat, perlu dibuat komponen untuk menampilkannya.

---

### 4. Benefit ✅
**File:** `src/app/_contents/benefit-content.ts` (BARU)

6 manfaat dalam bentuk narasi (bukan bullet point pendek):
1. Tidak bingung mulai dari mana
2. Terbebas dari plagiasi dan deteksi AI
3. Mudah temukan gap riset original
4. Proses lebih cepat dan efisien
5. Percaya diri saat sidang/publikasi
6. Waktu bisa fokus ke konten mendalam

**Status:** File sudah dibuat, perlu update komponen Benefits untuk menggunakan konten ini.

---

### 5. Statement + CTA ✅
**File:** `src/app/_contents/hero-content.ts`

Sudah ada di Hero section dengan CTA "Daftar Sekarang!"

**Status:** Sudah diimplementasikan.

---

### 6. Testimoni ✅
**File:** `src/app/_components/testimonials.tsx`

Sudah ada 4 testimoni dari dosen.

**Status:** Sudah diimplementasikan, sesuai urutan framework.

---

### 7. Features ✅
**File:** `src/app/_contents/features-content.ts` (DIPERBARUI)

Struktur baru dengan:
- **Title:** "Apa Saja yang Akan Anda Pelajari?"
- **Subtitle:** Penjelasan bahwa semua sudah terstruktur
- **Items:** Setiap item punya `category` dan `description` yang lebih naratif

**Status:** Konten sudah diperbarui, perlu update komponen Features untuk menampilkan struktur baru.

---

### 8. Special Offer ✅
**File:** `src/app/_contents/support-content.ts` (DIPERBARUI)

- **Normal Price:** Rp 149.000
- **Current Price:** GRATIS
- **Bonus:** 5 item bonus
- **Urgency:** "Penawaran ini hanya berlaku untuk kuota terbatas"

**Status:** Konten sudah diperbarui, perlu update komponen Support untuk menampilkan Special Offer section.

---

### 9. Ask & Answer (FAQ) ✅
**File:** `src/app/_contents/faq-content.ts` (BARU)

7 pertanyaan umum:
1. Cocok untuk siapa saja?
2. Bisa ikut kalau belum pernah pakai AI?
3. Aman dari deteksi Turnitin dan AI Detector?
4. Perlu beli tools khusus?
5. Bisa ikut kalau sibuk?
6. Ada jaminan lolos?
7. Hanya untuk bahasa Indonesia?

**Status:** File sudah dibuat, perlu dibuat komponen FAQ baru.

---

### 10. Statement Penutup + CTA ✅
**File:** `src/app/_contents/support-content.ts` (DIPERBARUI)

- **Title:** "Bayangkan 30 Hari ke Depan"
- **Visualization:** 4 poin visualisasi masa depan
- **Call to Action:** "Dan semuanya dimulai dari Anda, hari ini."
- **CTA Button:** "Ikut Workshop Sekarang"

**Status:** Konten sudah diperbarui, perlu update komponen Support untuk menampilkan closing statement.

---

## Urutan Section yang Disarankan (Framework Detail)

1. **Hero** (Biggest Goal + Statement + CTA) ✅
2. **Problem** ⚠️ (Perlu komponen baru)
3. **Solution** ⚠️ (Perlu komponen baru)
4. **Benefit** ⚠️ (Perlu update komponen)
5. **Statement + CTA** ✅ (Sudah di Hero)
6. **Testimonials** ✅
7. **Features** ⚠️ (Perlu update komponen)
8. **Speaker** ✅ (Bisa tetap dipertahankan)
9. **Special Offer** ⚠️ (Perlu update komponen Support)
10. **FAQ** ⚠️ (Perlu komponen baru)
11. **Closing Statement + CTA** ⚠️ (Perlu update komponen Support)
12. **Support/Preview** ✅ (Bisa tetap dipertahankan)

---

## File Konten yang Dibuat/Diperbarui

### File Baru:
1. ✅ `src/app/_contents/problem-content.ts`
2. ✅ `src/app/_contents/solution-content.ts`
3. ✅ `src/app/_contents/benefit-content.ts`
4. ✅ `src/app/_contents/faq-content.ts`

### File yang Diperbarui:
1. ✅ `src/app/_contents/hero-content.ts` - Ditambahkan `biggestGoal`
2. ✅ `src/app/_contents/features-content.ts` - Struktur baru dengan category + description
3. ✅ `src/app/_contents/support-content.ts` - Ditambahkan `specialOfferContent` dan `closingStatementContent`

---

## Komponen yang Perlu Dibuat/Diperbarui

### Komponen Baru yang Perlu Dibuat:
1. ⚠️ `src/app/_components/problem.tsx` - Menampilkan Problem section
2. ⚠️ `src/app/_components/solution.tsx` - Menampilkan Solution section
3. ⚠️ `src/app/_components/faq.tsx` - Menampilkan FAQ section

### Komponen yang Perlu Diperbarui:
1. ⚠️ `src/app/_components/hero.tsx` - Sudah ditambahkan Biggest Goal ✅
2. ⚠️ `src/app/_components/benefits.tsx` - Update untuk menggunakan `benefitContent` dengan gaya narasi
3. ⚠️ `src/app/_components/features.tsx` - Update untuk menampilkan struktur baru (category + description)
4. ⚠️ `src/app/_components/support.tsx` - Update untuk menampilkan Special Offer dan Closing Statement

### Komponen yang Sudah Sesuai:
1. ✅ `src/app/_components/testimonials.tsx` - Sudah sesuai urutan framework
2. ✅ `src/app/_components/speaker.tsx` - Bisa tetap dipertahankan sebagai social proof

---

## Prinsip Copywriting Framework Detail

### Yang Sudah Diterapkan:
- ✅ Bahasa sehari-hari, bukan bahasa brosur
- ✅ Fokus ke hasil akhir, bukan proses
- ✅ Narasi mengalir, bukan bullet point kaku
- ✅ Emosi dulu, baru teknis (Testimonials sebelum Features)

### Yang Perlu Diterapkan:
- ⚠️ Problem section dengan bahasa yang lebih personal dan relatable
- ⚠️ Benefit dalam bentuk narasi panjang, bukan bullet pendek
- ⚠️ Features dengan penjelasan awam, fokus manfaat bukan teknis
- ⚠️ FAQ dengan gaya tanya-jawab ringan

---

## Langkah Selanjutnya

1. **Buat komponen baru:**
   - Problem component
   - Solution component
   - FAQ component

2. **Update komponen existing:**
   - Benefits component (gunakan benefitContent dengan narasi)
   - Features component (tampilkan category + description)
   - Support component (tambahkan Special Offer dan Closing Statement)

3. **Update urutan di page.tsx:**
   - Sesuaikan urutan section sesuai framework Detail

4. **Testing:**
   - Pastikan semua konten mengalir dengan baik
   - Verifikasi CTA muncul di tempat yang tepat
   - Pastikan urgency dan social proof terlihat jelas

---

## Catatan Penting

- Framework Detail dirancang untuk **konversi 10%+** dari visitor LP
- Urutan section sangat penting untuk alur psikologis pembaca
- Setiap section harus saling terkait (Problem → Solution → Benefit)
- CTA muncul di beberapa titik strategis (setelah Benefit, setelah Special Offer, di Closing)

---

**Status:** Konten sudah disesuaikan dengan framework Detail. Tinggal implementasi komponen-komponennya.

