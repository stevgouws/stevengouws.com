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
      <main className="container mx-auto my-4 lg:max-w-screen-A4 print:max-w-screen-A4 mx-w-xl px-6">
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: any,
};
