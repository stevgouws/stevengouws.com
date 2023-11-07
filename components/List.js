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
          key={item.children ? item.children[0] : item}
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
