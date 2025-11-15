// Framework Detail - Special Offer Section
// Conversational, ringkas, dengan urgency

export const specialOfferContent = {
	title: "Penawaran Spesial untuk Anda",
	normalPrice: "Rp 249.000",
	currentPrice: "Rp 69.000",
	bonus: [
		"Live Demo Penggunaan NotebookLM",
		"E-Sertifikat keikutsertaan",
		"Rekaman video akses selamanya",
		"Tanya jawab dengan AI Engineer & Researcher",
		"Panduan lengkap fitur NotebookLM (audio, video, mind map, kuis)",
	],
	urgency: "Kuota terbatas. Jangan sampai kehabisan!",
	cta: {
		text: "Daftar Sekarang!",
		link: "s.id/ikutworkshop19",
	},
};

// Framework Detail - Statement Penutup + CTA
// Conversational, ringkas, dengan hook penutup
// Bahasa semi formal yang menusuk dan memberikan efek emosi kuat

export const closingStatementContent = {
	title: "Bayangkan Diri Anda Setelah Menguasai NotebookLM",
	visualization: [
		"Ratusan bahan ajar sudah dipahami dengan cepat melalui ringkasan audio NotebookLM",
		"Referensi terorganisir rapi dalam peta pikiran yang jelas dan mudah diakses",
		"Karya ilmiah berkualitas dengan laporan otomatis dan analisis mendalam",
		"Percaya diri penuh karena setiap konsep tertanam kuat melalui fitur kuis NotebookLM",
	],
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
