interface LinkProps {
  children: string;
  href: string;
  target?: "_blank";
  displayBlock?: boolean;
}

export default function Link({
  children,
  href,
  target,
  displayBlock = false,
}: LinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener" : undefined}
      className={`text-pink-highlight underline ${displayBlock ? "block" : ""}`}
    >
      {children}
      <style jsx>
        {`
           {
            text-underline-offset: 5px;
            text-decoration-thickness: 0px;
          }
        `}
      </style>
    </a>
  );
}
