export default function Section({ children, classes, avoidPrintPageBreak }) {
  return (
    <section className={classes}>
      {children}
      <hr className="my-4" />
      <style jsx>
        {`
          section:last-child hr {
            display: none;
          }
          ${avoidPrintPageBreak ? `break-inside: avoid;` : ""}
        `}
      </style>
    </section>
  );
}
