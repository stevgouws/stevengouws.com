export default function Link({ children, href, target, displayBlock }) {
  function AnchorTag() {
    return (
      <a
        href={href}
        target={target}
        className="border-b border-pink-highlight text-pink-highlight"
      >
        {children}
      </a>
    );
  }

  if (displayBlock)
    return (
      <div>
        <AnchorTag />
      </div>
    );

  return <AnchorTag />;
}
