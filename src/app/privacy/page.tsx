import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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

				<h1 className="mb-8 text-2xl font-bold">Privacy Policy</h1>

				<div className="prose prose-gray max-w-none">
					<p>Last updated: January 2024</p>

					<h2>1. Information We Collect</h2>
					<p>
						We collect information that you provide directly to us, including
						name, email address, and other contact details when you register for
						our webinars.
					</p>

					<h2>2. How We Use Your Information</h2>
					<p>We use the information we collect to:</p>
					<ul>
						<li>Provide and maintain our services</li>
						<li>Send you updates about our webinars</li>
						<li>Respond to your inquiries</li>
						<li>Improve our services</li>
					</ul>

					<h2>3. Information Sharing</h2>
					<p>
						We do not sell or rent your personal information to third parties.
						We may share your information with service providers who assist in
						our operations.
					</p>

					<h2>4. Cookies and Tracking</h2>
					<p>
						We use cookies and similar tracking technologies to track activity
						on our website and improve user experience.
					</p>

					<h2>5. Data Security</h2>
					<p>
						We implement appropriate security measures to protect your personal
						information from unauthorized access or disclosure.
					</p>

					<h2>6. Your Rights</h2>
					<p>
						You have the right to access, correct, or delete your personal
						information. Contact us to exercise these rights.
					</p>

					<h2>7. Changes to Privacy Policy</h2>
					<p>
						We may update this privacy policy from time to time. We will notify
						you of any changes by posting the new policy on this page.
					</p>

					<h2>8. Contact Us</h2>
					<p>
						If you have questions about this Privacy Policy, please contact us
						at @aiindonesiakreatif@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
}
