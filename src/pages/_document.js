import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class CustomDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head title="David Portfolio">
					<link rel="icon" href="/logo.svg" />
					<Script src="https://fonts.googleapis.com" strategy="lazyOnload" />
					<Script
						src="https://fonts.gstatic.com"
						strategy="lazyOnload"
						crossOrigin="true"
					/>
					<Script
						src="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap"
						strategy="lazyOnload"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
