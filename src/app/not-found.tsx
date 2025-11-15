"use client";

import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-gray-900">404</h1>
				<h2 className="mt-4 text-2xl font-semibold text-gray-700">
					Halaman Tidak Ditemukan
				</h2>
				<p className="mt-2 text-gray-600">
					Maaf, halaman yang Anda cari tidak ada.
				</p>
				<Link
					href="/"
					className="mt-6 inline-block rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-white transition-all hover:brightness-110"
				>
					Kembali ke Beranda
				</Link>
			</div>
		</div>
	);
}

