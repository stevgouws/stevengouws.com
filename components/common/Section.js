export default function Section({ children, classes }) {
  return (
    <section className={classes}>
      {children}
      <hr className="my-4" />
      <style jsx>
        {`
          // section {
          //   break-inside: avoid;
          // }
        `}
      </style>
    </section>
  );
}
