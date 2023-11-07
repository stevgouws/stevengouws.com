export default function List({
  items,
  noWrap = false,
  styleInside = false,
  styleType,
  classes = "",
}) {
  return (
    <ul className={`${styleInside ? "list-inside" : "pl-5"} ${classes}`}>
      {items.map((item) => (
        <li
          key={getKey(item)}
          className={`
              ${noWrap ? "whitespace-no-wrap" : ""}
              ${styleType === "dash" ? "list-none" : "list-disc"}
            `}
        >
          {styleType === "dash" && "- "}
          {item}
        </li>
      ))}
    </ul>
  );
}

function getKey(item) {
  if (typeof item === "string") return item;
  // 👇 For recursive use of <List> as a sub-item of <List>
  if (Array.isArray(item.props.children)) return item.props.children[0];
  return item.props.children;
}
