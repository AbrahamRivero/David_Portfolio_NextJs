const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
	compress: true,
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
})
