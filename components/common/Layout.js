import Head from "next/head";
import { any } from "prop-types";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Steven Gouws - Javascript Developer</title>
      </Head>
      <main className="container mx-auto my-4 lg:max-w-screen-A4 print:max-w-screen-A4 mx-w-xl px-6 bg-white shadow-xl shadow-2xl py-12 px-12 rounded-sm">
        {children}
        <style jsx global>{`
          html {
            background: linear-gradient(
              0deg,
              hsl(189.88deg 86.31% 62.75%) 0%,
              hsl(162.48deg 100% 82.02%) 66.66%,
              hsl(189.88deg 86.31% 62.75%) 100%
            );
            height: 200%;
            padding-top: 56px;
          }
          body {
            overflow: scroll;
          }
        `}</style>
      </main>
    </>
  );
}

Layout.propTypes = {
  children: any,
};
