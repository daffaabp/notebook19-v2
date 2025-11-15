# Style Desain & Konten Landing Page

## Catatan Penting
**Status:** Landing page ini belum distandarisasi untuk kompatibilitas tinggi dan conversion rate optimal. Dokumentasi ini mencatat kondisi desain dan konten saat ini.

---

## Struktur Halaman

### Urutan Section (Top to Bottom)
1. **Navbar** (Fixed Header)
2. **Hero Section**
3. **Features Section** (Kisi-kisi Materi)
4. **Speaker Section** (Pembicara Utama)
5. **Benefits Section** (Apa Yang Akan Anda Dapatkan?)
6. **Testimonials Section** (Kisah Sukses Alumni)
7. **Support Section** (Preview Workshop + Final CTA)
8. **Footer**
9. **WhatsApp Button** (Floating)

---

## Style Desain

### Color Palette

#### Primary Colors
- **Blue Gradient:** `from-blue-600 to-indigo-600`
- **Blue Shades:** 
  - `blue-500`, `blue-600`
  - `indigo-500`, `indigo-600`
- **Teal Accent:** `teal-600` (untuk numbered badges)

#### Background Colors
- **White:** `bg-white`
- **Gray Gradients:** 
  - `from-white to-gray-50/50` (section backgrounds)
  - `gray-50`, `gray-100`, `gray-200` (borders, subtle backgrounds)
- **Gray Text:** `gray-600`, `gray-700`, `gray-800`, `gray-900`

#### Accent Colors
- **Green:** `green-500`, `green-50`, `emerald-500` (untuk price tags)
- **Red:** `red-400`, `red-500` (untuk urgency indicators)
- **WhatsApp Green:** `#25D366`

#### Decorative Elements
- **Gradient Orbs:** `bg-blue-500/10`, `bg-indigo-500/10` dengan `blur-3xl`
- **Grid Pattern:** `#f0f0f0` dengan opacity rendah

### Typography

#### Font Family
- **Primary:** Inter (Google Fonts via next/font/google)
- **Fallback:** Arial, Helvetica, sans-serif (di globals.css)

#### Font Sizes
- **Hero Title:** `text-2xl` → `sm:text-2xl` → `md:text-3xl`
- **Section Headings:** `text-2xl` → `sm:text-3xl` → `md:text-4xl` → `lg:text-5xl`
- **Body Text:** `text-sm` → `sm:text-base` → `md:text-lg`
- **Small Text:** `text-xs` → `sm:text-sm`

#### Font Weights
- **Bold:** `font-bold` (headings, important text)
- **Semibold:** `font-semibold` (subheadings, CTAs)
- **Medium:** `font-medium` (body emphasis)

### Spacing & Layout

#### Container
- **Max Width:** `max-w-7xl` (1280px)
- **Padding:** 
  - Mobile: `px-3`, `px-4`
  - Tablet: `md:px-4`, `sm:px-6`
  - Desktop: `lg:px-8`

#### Section Padding
- **Vertical:** `py-12` → `md:py-16` → `lg:py-24`
- **Hero:** `pt-16` → `sm:pt-12` → `md:pt-20` → `lg:pt-24`

#### Grid Layouts
- **Hero:** `lg:grid-cols-2` (content + image)
- **Testimonials:** `lg:grid-cols-2`
- **Footer:** `lg:grid-cols-2`

### Visual Effects

#### Background Decorations
- **Gradient Orbs:** 
  - Position: `left-1/4 top-1/4` dan `right-1/4 top-3/4`
  - Size: `h-96 w-96`
  - Effect: `blur-3xl` dengan opacity rendah
- **Grid Pattern:**
  - `bg-[linear-gradient(...)]` dengan `bg-[size:4rem_4rem]`
  - Mask: `radial-gradient(ellipse_at_center,transparent_20%,black)`

#### Shadows
- **Cards:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Buttons:** `shadow-lg shadow-blue-500/25`
- **Hover:** `hover:shadow-xl`

#### Border Radius
- **Small:** `rounded-lg`, `rounded-xl`
- **Medium:** `rounded-full` (buttons, badges)
- **Large:** `rounded-2xl` (cards)

#### Transitions & Animations
- **Hover Effects:** 
  - `hover:-translate-y-1` (lift effect)
  - `hover:translate-x-1` (slide effect)
  - `hover:scale-105`, `hover:scale-110` (scale effect)
- **Transitions:** `transition-all duration-300`
- **Ping Animation:** `animate-ping` (untuk urgency indicators)

### Component Styles

#### Buttons
- **Primary CTA:**
  - Gradient: `bg-gradient-to-r from-blue-600 to-indigo-600`
  - Text: `text-white font-semibold`
  - Padding: `px-6 py-3.5` → `sm:px-6 sm:py-2.5`
  - Shadow: `shadow-lg shadow-blue-500/25`
  - Hover: `hover:-translate-y-1 hover:shadow-xl`

#### Badges
- **FREE WEBINAR Badge:**
  - Gradient: `from-blue-600 to-indigo-600`
  - Rounded: `rounded-full`
  - Padding: `px-4 py-1.5` → `md:px-5 md:py-2`

#### Price Tags
- **Container:** `bg-gradient-to-r from-green-50 to-emerald-50`
- **Original Price:** `line-through text-gray-500`
- **Current Price:** `bg-gradient-to-r from-green-500 to-emerald-500 rounded-full`

#### Cards
- **Background:** `bg-white`
- **Border:** `border border-gray-200` atau `border-gray-200/50`
- **Shadow:** `shadow-sm` → `hover:shadow-md`
- **Padding:** `p-4` → `sm:p-6` → `md:p-8`

---

## Konten Landing Page

### Hero Section

#### Eyebrow/Badge
- **Text:** "FREE WEBINAR"
- **Style:** Gradient badge dengan teks putih

#### Main Title
- **Line 1:** "Rahasia Penulisan Karya Ilmiah Berkualitas"
- **Line 2 (Highlight):** "dengan AI Tanpa Plagiasi dan Lolos Turnitin"
- **Style:** Gradient text untuk highlight

#### Target Audience
- **Title:** (kosong saat ini)
- **Points:**
  1. "Kesulitan menemukan novelty dan gap riset yang original?"
  2. "Hasil Turnitin di atas 20% atau terdeteksi AI Detector?"
  3. "Referensi jurnal kurang berkualitas?"

#### Event Details
- **Date:** "SABTU, 26 JULI 2025"
- **Time:** "19.00 - 20.30 WIB"
- **Platform:** "Live Zoom Meeting"
- **Price:**
  - Original: "Rp 149.000" (strikethrough)
  - Now: "GRATIS"

#### CTA
- **Button Text:** "Daftar Sekarang!"
- **Subtext:** "Kuota Terbatas!" (dengan red ping animation)
- **Link:** Google Forms URL

#### Stats
- **Alumni:** "945+ Disertasi & Tesis Selesai"
- **Satisfaction:** "99% Kelulusan Sidang"

#### Image
- **Source:** `/images/banner26juli.png`
- **Alt:** "Rahasia Penulisan Karya Ilmiah Berkualitas dengan AI Tanpa Plagiasi"

### Features Section (Kisi-kisi Materi)

#### Title
- **Text:** "KISI-KISI MATERI"

#### Items (Numbered List)
1. "Materi dasar tentang Artificial Intelligence dalam Penulisan"
2. "Pencarian novelty dan riset gap dengan AI secara otomatis sesuai aturan DIKTI"
3. "Strategi terbebas deteksi dari Turnitin dan AI detector dengan hasil natural"
4. "Framework terstruktur untuk membuat karya ilmiah yang berkualitas"
5. "Menggunakan AI untuk kebutuhan olah data penelitian dan analisis statistik"
6. "Sitasi dengan mudah dan akurat dengan AI"

**Style:** Numbered badges dengan `teal-600` background

### Speaker Section

#### Title
- **Main:** "Pembicara Utama"
- **Subtitle:** "Pelajari langsung dari pembina komunitas yang telah membantu 3000+ akademisi berhasil"

#### Speaker Info
- **Name:** "M. Arianto"
- **Role:** "Pembina Komunitas Kelas Inovatif"
- **Image:** `/images/arianto.jpg`

#### Stats
- "10+ Tahun Pengalaman"
- "195+ Proyek AI"

#### Achievements
- "Pembina Kelas Inovatif"
- "Mentor 3000+ Akademisi"
- "AI Engineer & Konsultan"

**Style:** Card dengan shadow-xl, rounded-2xl, white background

### Benefits Section

#### Title
- **Text:** "Apa Yang Akan Anda Dapatkan?"

#### Benefits List
1. "Live Demo Penggunaan AI untuk Karya Ilmiah"
2. "E-Sertifikat keikutsertaan"
3. "Rekaman video workshop yang dapat diakses selamanya"
4. "Kesempatan sharing tanya jawab dengan pemateri dan peneliti berpengalaman"
5. "Akses ke tools AI canggih untuk penulisan karya ilmiah"

**Style:** Check icons dengan `teal-600` color

### Testimonials Section

#### Title
- **Main:** "Kisah Sukses"
- **Highlight:** "Alumni Kami"
- **Subtitle:** "Bergabung dengan ratusan dosen yang telah berhasil mempublikasikan karya penulisan ilmiah mereka melalui bimbingan kami."

#### Testimonials (4 items)
1. **Author:** "GOMGOM T. PANGARIBUAN"
   - **Role:** "Dosen"
   - **Quote:** "Berhubung lagi cari referensi untuk jurnal, maka aplikasi ini sangat membantu sekali bagi saya."
   - **Image:** `/images/testimoni/profile3.jpg`

2. **Author:** "ABDUL JAMIL, S.E., M.M."
   - **Role:** "Dosen"
   - **Quote:** "Sudah sangat bagus karena sesuai dengan kebutuhan."
   - **Image:** `/images/testimoni/profile5.jpg`

3. **Author:** "LENNI YUNITA HARAHAP, M.P.d"
   - **Role:** "Dosen"
   - **Quote:** "Pelatihan yg memberikan kontribusi bagi para dosen khususnya dosen pemula dlm penulisan artikel ilmiah. Ilmunya sangat bermanfaat. Materi course adlh pembelajaran baru bagi saya."
   - **Image:** `/images/testimoni/profile6.jpg`

4. **Author:** "Ir. KHAIRUDDIN KARIM, S.T., MT"
   - **Role:** "Dosen"
   - **Quote:** "Bagi saya, sangat bermanfaat khususnya dalam penyusunan karya-karya ilmiah dan banyak hal baru yang saya peroleh"
   - **Image:** `/images/testimoni/profile4.jpg`

**Style:** Auto-scrolling cards dengan smooth transition, white background, border, shadow

### Support Section

#### Preview Section
- **Title:** "Lihat Preview Workshop Kami"
- **Video:** YouTube embed (`hOx84iNHLjM`)
- **Aspect Ratio:** 16:9 (`pt-[56.25%]`)

#### Final CTA
- **Title:** "Siap meningkatkan kualitas dan kecepatan penulisan karya ilmiah Anda?"
- **Subtitle:** "Bergabung sekarang dan dapatkan akses ke teknik-teknik yang telah terbukti!"
- **Price Tag:** "Rp 149.000" → "GRATIS"
- **Button:** "Daftar Sekarang!"
- **Urgency:** "Kuota Terbatas" (dengan red ping)

#### Links
- Terms of Service
- Privacy Policy

### Navbar

#### Logo
- **Image:** `/images/kelasinovatif-clean.png`
- **Alt:** "Kelas Inovatif"

#### Navigation Links
- "Materi" → `#features`
- "Pembicara" → `#speakers`
- "Fasilitas" → `#benefits`
- "Testimoni" → `#testimonials`

#### CTA Button
- **Text:** "Daftar Sekarang"
- **Style:** Gradient button (blue to indigo)

**Behavior:**
- Fixed header dengan scroll detection
- Transparent background saat di top
- White background dengan border saat scroll
- Mobile menu dengan slide animation

### Footer

#### Brand Info
- **Logo:** Kelas Inovatif
- **Description:** "Platform inovatif untuk mempelajari kecerdasan buatan (AI), dengan pendekatan yang terstruktur dan mudah dipahami untuk semua kalangan."

#### Social Links
- **Instagram:** `@kelasinovatif` → `https://instagram.com/kelasinovatif`
- **YouTube:** "Kelas Inovatif" → YouTube channel URL

#### Copyright
- "© {year} Kelas Inovatif. All rights reserved."
- Link: `kelasinovatif.com`

### WhatsApp Button (Floating)

#### Position
- **Fixed:** `bottom-8 right-8`
- **Z-index:** `z-[9999]`

#### Style
- **Background:** `#25D366` (WhatsApp green)
- **Shape:** `rounded-full`
- **Size:** `h-14`
- **Icon:** MessageCircle dari Lucide
- **Text:** "Hubungi Kami"
- **Link:** `https://wa.me/6285712208535`

---

## Pola Desain yang Digunakan

### 1. Gradient Backgrounds
- Konsisten menggunakan `from-white to-gray-50/50` untuk section backgrounds
- Gradient orbs sebagai decorative elements

### 2. Card-based Layout
- White cards dengan subtle borders dan shadows
- Hover effects untuk interactivity

### 3. Numbered Lists
- Features menggunakan numbered badges
- Benefits menggunakan check icons

### 4. Stats Display
- Counter animation dengan Framer Motion
- Large numbers dengan descriptive labels

### 5. Auto-scrolling
- Testimonials menggunakan auto-scroll dengan smooth transition

### 6. Urgency Indicators
- Red ping animation untuk "Kuota Terbatas"
- Price strikethrough untuk menunjukkan value

### 7. Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Grid layouts yang adaptif

---

## Masalah & Area untuk Perbaikan

### 1. Conversion Optimization
- **CTA Visibility:** Multiple CTAs tapi bisa lebih prominent
- **Social Proof:** Testimonials bisa lebih visible
- **Trust Signals:** Bisa ditambahkan lebih banyak

### 2. Performance
- **Image Optimization:** Perlu verifikasi Next.js Image optimization
- **Animation Performance:** Auto-scroll testimonials bisa dioptimasi

### 3. Accessibility
- **ARIA Labels:** Sudah ada tapi bisa lebih comprehensive
- **Color Contrast:** Perlu verifikasi WCAG compliance
- **Keyboard Navigation:** Perlu testing

### 4. SEO
- **Meta Tags:** Sudah ada di layout.tsx
- **Structured Data:** Belum ada schema markup
- **Alt Texts:** Sudah ada tapi bisa lebih descriptive

### 5. Mobile Experience
- **Touch Targets:** Perlu verifikasi ukuran minimum
- **Mobile Menu:** Sudah ada tapi bisa ditingkatkan UX-nya

### 6. Content Strategy
- **Value Proposition:** Bisa lebih jelas dan prominent
- **Benefit Statements:** Bisa lebih spesifik dengan metrics
- **Social Proof:** Bisa ditambahkan logos/partners

---

## Teknologi Visual yang Digunakan

### Animations
- **Framer Motion:** Counter animations, scroll detection
- **CSS Transitions:** Hover effects, smooth scrolling
- **Tailwind Animate:** Ping animation untuk urgency

### Effects
- **Backdrop Blur:** Navbar transparency effect
- **Gradient Overlays:** Subtle hover effects
- **Blur Effects:** Decorative orbs dengan blur-3xl

### Layout Techniques
- **CSS Grid:** Multi-column layouts
- **Flexbox:** Component alignment
- **Aspect Ratio:** Image containers (pt-[56.25%] untuk 16:9)

---

## Catatan Implementasi

### Facebook Pixel Integration
- Pageview tracking
- InitiateCheckout event pada CTAs
- Contact event pada WhatsApp button

### Next.js Features
- Image optimization dengan Next.js Image component
- Font optimization dengan next/font/google
- Client components untuk interactivity

### State Management
- Local state dengan useState untuk:
  - Mobile menu toggle
  - Scroll detection
  - Testimonial scroll position

---

## Rekomendasi untuk Standarisasi

1. **Design System:** Buat design tokens yang konsisten
2. **Component Library:** Standardisasi komponen yang reusable
3. **Performance:** Optimasi images, lazy loading, code splitting
4. **Analytics:** Implementasi tracking yang lebih comprehensive
5. **A/B Testing:** Setup untuk testing CTAs dan layouts
6. **Accessibility Audit:** WCAG 2.1 AA compliance
7. **Mobile Optimization:** Focus pada mobile-first improvements
8. **Content Strategy:** Clearer value propositions dan benefit statements

