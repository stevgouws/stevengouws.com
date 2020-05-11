export default function Section({ children, hideHrForPrint, classes }) {
  return (
    <section className={classes}>
      {children}
      <hr className={`my-4 ${hideHrForPrint ? "print:hidden" : ""}`.trim()} />
      <style jsx>
        {`
          section:last-child hr {
            display: none;
          }
        `}
      </style>
    </section>
  );
}
