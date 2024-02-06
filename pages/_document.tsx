import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Steven Gouws - Full-stack Developer"
          />
          <title>Steven Gouws - Full-stack Developer</title>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://stevengouws.com/" />
          <meta property="og:title" content="Steven Gouws" />
          <meta property="og:description" content="Full-stack Developer" />
          <meta
            property="og:image"
            content="https://stevengouws.com/open-graph-image.webp"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
