import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 px-4 py-16 sm:px-6 sm:py-24">
			<div className="mx-auto max-w-4xl">
				{/* Back Button */}
				<Link
					href="/"
					className="group mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
				>
					<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
					Kembali
				</Link>

				<h1 className="mb-8 text-2xl font-bold">Terms of Service</h1>

				<div className="prose prose-gray max-w-none">
					<p>Last updated: November 15, 2025</p>

					<h2>1. Acceptance of Terms</h2>
					<p>
						By accessing and using this website, you accept and agree to be
						bound by the terms and provision of this agreement.
					</p>

					<h2>2. Description of Service</h2>
					<p>
						We provide educational webinars and workshops focused on academic
						writing and research methodologies.
					</p>

					<h2>3. User Conduct</h2>
					<p>
						Users agree to use the service for lawful purposes and in a way that
						does not infringe the rights of any third party.
					</p>

					<h2>4. Intellectual Property</h2>
					<p>
						All content included on this website is the property of our company
						or our content suppliers and protected by international copyright
						laws.
					</p>

					<h2>5. Limitation of Liability</h2>
					<p>
						We shall not be liable for any indirect, incidental, special,
						consequential or punitive damages resulting from your use of the
						service.
					</p>

					<h2>6. Changes to Terms</h2>
					<p>
						We reserve the right to modify these terms at any time. We do not
						guarantee to notify you of any changes.
					</p>

					<h2>7. Contact Information</h2>
					<p>
						If you have any questions about these Terms, please contact us at
						info@kelasinovatif.id
					</p>
				</div>
			</div>
		</div>
	);
}
