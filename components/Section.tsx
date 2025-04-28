import { HasClassName } from "../types";

interface SectionProps extends HasClassName {
  children: React.ReactNode;
  avoidPrintPageBreak?: boolean;
  showHrOnPrint?: boolean;
}

export default function Section({
  children,
  className,
  avoidPrintPageBreak,
  showHrOnPrint = false,
}: SectionProps) {
  return (
    <section className={className}>
      {children}
      <hr className={`my-4 ${!showHrOnPrint ? "print:hidden" : ""}`} />
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
