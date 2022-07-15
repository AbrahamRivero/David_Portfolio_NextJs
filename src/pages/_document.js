import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html lang="en-US">
				<Head title="David Portfolio">
					<link rel="icon" href="/logo.svg" />
					<link rel="preconnect" href="https://fonts.googleapis.com"></link>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					></link>
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
