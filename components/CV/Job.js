import Icon from "../common/Icon";

export default function Job({ company, position, date, location }) {
  return (
    <div className="mb-4">
      <h3 className="mb-0">
        {position} <span className="text-gray-500 font-normal">|</span>{" "}
        {company}
      </h3>
      <div className="flex">
        <Icon name="location" text={location} classes="mr-2" />
        <Icon name="calendar" text={date} />
      </div>
    </div>
  );
}
