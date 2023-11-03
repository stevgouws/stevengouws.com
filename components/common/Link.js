import { string, bool } from "prop-types";
import Icon from "./Icon";
export default function Link({ children, href, target, displayBlock, icon }) {
  function AnchorTag() {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener" : undefined}
        className="border-b border-pink-highlight text-pink-highlight"
      >
        {children}
      </a>
    );
  }

  if (icon) return <Icon name={icon} text={<AnchorTag />} />;

  if (displayBlock)
    return (
      <div>
        <AnchorTag />
      </div>
    );

  return <AnchorTag />;
}

Link.propTypes = {
  href: string.isRequired,
  target: string,
  displayBlock: bool,
};

Link.defaultProps = {
  displayBlock: false,
};
