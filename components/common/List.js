import { array, bool } from "prop-types";
export default function List({ items, noWrap, styleInside }) {
  function getUlClasses() {
    let classes = [""];
    classes.push(styleInside ? "list-inside" : "ml-5");
    return classes.join("");
  }

  function getLiClasses() {
    let classes = ["list-disc"];
    if (noWrap) classes.push("whitespace-no-wrap");
    return classes.join(" ");
  }

  return (
    <ul className={getUlClasses()}>
      {items.map((item) => (
        <li className={getLiClasses()} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: array.isRequired,
  noWrap: bool,
};

List.defaultProps = {
  noWrap: false,
  inside: false,
};
