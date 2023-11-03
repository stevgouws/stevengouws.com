import { any } from "prop-types";
export default function Layout({ children }) {
  return (
    <main className="container mx-auto lg:max-w-screen-A4 print:max-w-screen-A4 mx-w-xl bg-white shadow-xl print:shadow-none shadow-2xl p-8 md:p-12 print:py-0 rounded-md lg:rounded-sm">
      {children}
      <style jsx global>{`
        @media screen {
          html {
            padding-top: 56px;
            background: linear-gradient(
              0deg,
              hsl(189.88deg 86.31% 62.75%) 0%,
              hsl(162.48deg 100% 82.02%) 66.66%,
              hsl(189.88deg 86.31% 62.75%) 100%
            );
            height: 200%;
          }
          body {
            overflow: scroll;
          }
        }
        @media screen and (max-width: 768px) {
          html {
            padding: 16px 8px 16px 8px;
          }
        }
      `}</style>
    </main>
  );
}

Layout.propTypes = {
  children: any,
};
