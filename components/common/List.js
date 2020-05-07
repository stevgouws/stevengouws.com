import { array, bool } from "prop-types";
export default function List({ items, noWrap }) {
  return (
    <ul className="ml-5">
      {items.map((item) => (
        <li
          className={`list-disc list-outside${
            noWrap ? " whitespace-no-wrap" : ""
          }`}
          key={item}
        >
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
};
