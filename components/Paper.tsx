interface PaperProps {
  children: React.ReactElement;
}

export default function Paper({ children }: PaperProps) {
  return (
    <main className='container mx-auto lg:max-w-screen-A4 print:max-w-screen-A4 mx-w-xl bg-white print:shadow-none shadow-2xl p-8 md:p-12 print:py-0 rounded-md lg:rounded-sm'>
      {children}
      <style jsx global>{`
        @media screen {
          html {
            padding-top: 56px;
            background: hsl(189 86% 75% / 1);
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
