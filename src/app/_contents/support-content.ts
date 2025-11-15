// Framework Detail - Special Offer Section
// Conversational, ringkas, dengan urgency

export const specialOfferContent = {
	title: "Penawaran Spesial untuk Anda",
	normalPrice: "Rp 149.000",
	currentPrice: "GRATIS",
	bonus: [
		"Live Demo Penggunaan AI",
		"E-Sertifikat keikutsertaan",
		"Rekaman video akses selamanya",
		"Tanya jawab dengan pemateri berpengalaman",
		"Akses tools AI canggih",
	],
	urgency: "Kuota terbatas. Jangan sampai kehabisan!",
	cta: {
		text: "Daftar Sekarang!",
		link: "https://docs.google.com/forms/d/e/1FAIpQLSd4RabWcBBSRenuBIHphS-U795OahBIZPje4WW7GEovspEjjg/viewform?usp=header",
	},
};

// Framework Detail - Statement Penutup + CTA
// Conversational, ringkas, dengan hook penutup

export const closingStatementContent = {
	title: "Bayangkan 30 Hari ke Depan",
	visualization: [
		"Karya ilmiah selesai dengan kualitas tinggi",
		"Turnitin di bawah 20%, terbebas dari AI Detector",
		"Referensi jurnal terindeks dan berkualitas",
		"Framework penulisan untuk penelitian selanjutnya",
	],
	callToAction: "Dan semuanya dimulai dari Anda, hari ini.",
	cta: {
		text: "Ikut Workshop Sekarang",
		link: "https://docs.google.com/forms/d/e/1FAIpQLSd4RabWcBBSRenuBIHphS-U795OahBIZPje4WW7GEovspEjjg/viewform?usp=header",
	},
};

interface PreviewImage {
	id: string;
	src: string;
	alt: string;
}

export const previewImages: PreviewImage[] = [
	{
		id: "preview-1",
		src: "/images/live-zoom/preview-1.png",
		alt: "Sesi tanya jawab bersama peserta workshop sebelumnya",
	},
	{
		id: "preview-2",
		src: "/images/live-zoom/preview-3.png",
		alt: "Sesi tanya jawab bersama peserta workshop sebelumnya",
	},
	{
		id: "preview-3",
		src: "/images/live-zoom/preview-2.png",
		alt: "Sesi tanya jawab bersama peserta workshop sebelumnya",
	},
];
