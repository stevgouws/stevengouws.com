import Icon from "../common/Icon";

export default function Duration({ duration }) {
  if (Array.isArray(duration)) {
    return (
      <div className="lg:flex">
        {duration.map((item) => (
          <Icon key={item} name="calendar" text={item} classes="mr-4" />
        ))}
      </div>
    );
  }
  return <Icon name="calendar" text={duration} />;
}
