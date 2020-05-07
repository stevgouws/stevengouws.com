import { string, array, oneOfType, bool } from "prop-types";
import Icon from "../common/Icon";
import List from "../common/List";

export default function Job({
  children,
  company,
  position,
  duration,
  location,
  achievements,
  exampleTasks,
  tech,
  isSimple,
}) {
  function Heading() {
    return (
      <div className="mb-4">
        <h3 className="mb-0">
          {position} <span className="text-gray-500 font-normal">|</span>{" "}
          {company}
        </h3>
        <div className={`flex ${Array.isArray(duration) ? "flex-col" : ""}`}>
          <Icon name="location" text={location} classes="mr-2" />
          <Duration />
        </div>
      </div>
    );
  }

  function Duration() {
    if (Array.isArray(duration)) {
      return (
        <>
          {duration.map((item) => (
            <Icon key={item} name="calendar" text={item} />
          ))}
        </>
      );
    }
    return <Icon name="calendar" text={duration} />;
  }

  function Achievements() {
    if (!achievements.length > 0) return null;
    return (
      <div className="mb-4">
        <h4 className="mb-0">Achievements</h4>
        <List items={achievements} />
      </div>
    );
  }

  function Tasks() {
    if (!exampleTasks.length > 0) return null;
    return (
      <div>
        <h4 className="mb-0">Some things I worked on</h4>
        <List items={exampleTasks} />
      </div>
    );
  }

  function Tech() {
    return (
      <div className="ml-4">
        <h4 className="mb-0">Tech</h4>
        <List items={tech} noWrap />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <Heading />
      <div className="mb-4 flex justify-between">
        {isSimple ? (
          <div>{children}</div>
        ) : (
          <div className="first-child:mb-4">
            <Achievements />
            <Tasks />
          </div>
        )}
        <Tech />
      </div>
      {!isSimple && <div>{children}</div>}
      <style jsx>{`
        break-inside: avoid;
      `}</style>
    </div>
  );
}

Job.propTypes = {
  company: string.isRequired,
  position: string.isRequired,
  duration: oneOfType([string.isRequired, array.isRequired]),
  location: string.isRequired,
  achievements: array,
  exampleTasks: array,
  tech: array,
  isSimple: bool,
};

Job.defaultProps = {
  achievements: [],
  exampleTasks: [],
  tech: [],
  isSimple: false,
};
