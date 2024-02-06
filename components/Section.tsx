import { HasClassName } from "../types";

interface SectionProps extends HasClassName {
  children: React.ReactNode;
  avoidPrintPageBreak?: boolean;
}

export default function Section({
  children,
  className,
  avoidPrintPageBreak,
}: SectionProps) {
  return (
    <section className={className}>
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
