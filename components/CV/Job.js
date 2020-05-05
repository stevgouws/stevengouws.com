import { string, array } from "prop-types";
import Icon from "../common/Icon";

export default function Job({
  children,
  company,
  position,
  duration,
  location,
  achievements,
  exampleTasks,
  tech,
}) {
  function Heading() {
    return (
      <div className="mb-4">
        <h3 className="mb-0">
          {position} <span className="text-gray-500 font-normal">|</span>{" "}
          {company}
        </h3>
        <div className="flex flex-auto">
          <Icon name="location" text={location} classes="mr-2" />
          <Icon name="calendar" text={duration} />
        </div>
      </div>
    );
  }

  function Achievements() {
    return (
      <div className="mb-4">
        <h4 className="mb-0">Achievements</h4>
        <ul className="ml-5">
          {achievements.map((achievement) => (
            <li className="list-disc list-outside" key={achievement}>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function Tasks() {
    return (
      <div>
        <h4 className="mb-0">Some things I worked on</h4>
        <ul className="ml-5">
          {exampleTasks.map((task) => (
            <li className="list-disc list-outside" key={task}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function Tech() {
    return (
      <div className="ml-4">
        <h4 className="mb-0">Tech</h4>
        <ul className="ml-5">
          {tech.map((techItem) => (
            <li
              className="list-disc list-outside whitespace-no-wrap"
              key={techItem}
            >
              {techItem}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <Heading />
      <div className="mb-4 flex justify-between">
        <div className="first-child:mb-4">
          <Achievements />
          <Tasks />
        </div>
        <Tech />
      </div>
      <p>{children}</p>
    </div>
  );
}

Job.propTypes = {
  company: string.isRequired,
  position: string.isRequired,
  duration: string.isRequired,
  location: string.isRequired,
  achievements: array,
  exampleTasks: array,
  tech: array,
};

Job.defaultProps = {
  achievements: [],
  exampleTasks: [],
  tech: [],
};
