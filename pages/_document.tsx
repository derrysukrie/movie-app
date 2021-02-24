import Document, { Html, Head, Main, NextScript } from 'next/document';

// Document only rendered on Server side
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Movies directory"
          />
          <meta property="og:image" content="/favicon.ico" />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, React, NextJS, Redux"
          />
          <meta name="author" content="Derry Sukrie" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
