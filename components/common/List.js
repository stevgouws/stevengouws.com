import { array, bool, oneOfType, string } from "prop-types";
export default function List({
  items,
  noWrap,
  styleInside,
  styleType,
  columns,
  flexRatios,
}) {
  if (items && !columns.length) columns = [items];

  function getUlClasses({ index }) {
    let classes = [""];
    classes.push(styleInside ? "list-inside" : "pl-5");
    if (flexRatios.length > 1) classes.push(`flex-${flexRatios[index]}`);
    return classes.join(" ");
  }

  function getLiClasses() {
    let classes = [];
    if (noWrap) classes.push("whitespace-no-wrap");
    classes.push(styleType ? `list-${"none"}` : "list-disc");
    return classes.join(" ");
  }

  return columns.map((column, index) => {
    return (
      <ul key={index} className={getUlClasses({ index })}>
        {column.map((item) => {
          return (
            <li
              className={getLiClasses()}
              key={item.children ? item.children[0] : item}
            >
              {styleType === "dash" && "- "}
              {item}
            </li>
          );
        })}
      </ul>
    );
  });
}

List.propTypes = {
  items: array,
  noWrap: bool,
  columns: oneOfType([string.isRequired, array.isRequired]),
  flexRatios: array,
};

List.defaultProps = {
  noWrap: false,
  inside: false,
  columns: [],
  flexRatios: [],
};
