import { array, bool } from "prop-types";
export default function List({ items, noWrap, styleInside, styleType }) {
  function getUlClasses() {
    let classes = [""];
    classes.push(styleInside ? "list-inside" : "ml-5");
    return classes.join("");
  }

  function getLiClasses() {
    let classes = [];
    if (noWrap) classes.push("whitespace-no-wrap");
    classes.push(styleType ? `list-${"none"}` : "list-disc");
    return classes.join(" ");
  }

  return (
    <ul className={getUlClasses()}>
      {items.map((item) => (
        <li className={getLiClasses()} key={item}>
          {styleType === "dash" && "- "}
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
