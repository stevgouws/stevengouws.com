import { HasClassName } from "../types";

export type ListItems = readonly (React.ReactElement | string)[];

interface ListProps extends HasClassName {
  items: ListItems;
  noWrap?: boolean;
  styleInside?: boolean;
  styleTypeDash?: boolean;
}

export default function List({
  items,
  noWrap = false,
  styleInside = false,
  styleTypeDash = false,
  className = "",
}: ListProps) {
  return (
    <ul className={`${styleInside ? "list-inside" : "pl-5"} ${className}`}>
      {items.map((item) => (
        <li
          key={getKey(item)}
          className={`
              ${noWrap ? "whitespace-no-wrap" : ""}
              ${styleTypeDash ? "list-none" : "list-disc"}
            `}
        >
          {styleTypeDash && "- "}
          {item}
        </li>
      ))}
    </ul>
  );
}

function getKey(item: ListItems[number]) {
  if (typeof item === "string") return item;
  // 👇 For recursive use of <List> as a sub-item of <List>
  if (Array.isArray(item.props.children)) return item.props.children[0];
  return item.props.children;
}
