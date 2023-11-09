import Document, { Html, Head, Main, NextScript, type DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render () {
    return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument
