/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.unsplash.com"],
		unoptimized: true,
	},
	output: "export",
	// Ensure proper handling during static export
	typescript: {
		ignoreBuildErrors: false,
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
	// Configure webpack to handle client-only modules during static export
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// Ensure client-side modules are properly handled
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				net: false,
				tls: false,
			};
		}
		return config;
	},
};

module.exports = nextConfig;
