import { string, array, oneOfType, bool } from "prop-types";
import Icon from "../common/Icon";
import List from "../common/List";
import Section from "../common/Section";
import Duration from "../CV/Duration";

export default function Job({
  children,
  company,
  position,
  duration,
  location,
  achievements,
  exampleTasks,
  tech,
  softSkills,
}) {
  return (
    <Section>
      <Heading />
      <div className="mb-4 flex justify-between">
        <div className="first-child:mb-4">
          <Achievements />
          <Tasks />
        </div>
        <div className="ml-4 w-1/3">
          <Tech />
          <SoftSkills />
          {/* <style jsx>{`
            .tech {
              flex-basis: 166px;
            }
          `}</style> */}
        </div>
      </div>
      <div>{children}</div>
      <style jsx>{`
        // break-inside: avoid;
      `}</style>
    </Section>
  );

  function Heading() {
    return (
      <div className="mb-4">
        <h3 className="mb-0">
          {position} <span className="text-gray-500 font-normal">|</span>{" "}
          {company}
        </h3>
        <div
          className={`flex ${Array.isArray(duration) ? "justify-between" : ""}`}
        >
          <Icon name="location" text={location} classes="mr-2" />
          <Duration duration={duration} />
        </div>
      </div>
    );
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

  function RightColItem({ heading, items, noWrap }) {
    if (!items.length) return null;
    return (
      // SG_TODO:  remove shrink?
      <div className="flex-shrink-0 first:mb-4">
        <h4 className="mb-0">{heading}</h4>
        <List items={items} noWrap={noWrap} />
      </div>
    );
  }

  function Tech() {
    return <RightColItem heading="Tech" items={tech} noWrap />;
  }

  function SoftSkills() {
    return <RightColItem heading="Soft Skills" items={softSkills} />;
  }
}

Job.propTypes = {
  company: string.isRequired,
  position: string.isRequired,
  duration: oneOfType([string.isRequired, array.isRequired]),
  location: string.isRequired,
  achievements: array,
  exampleTasks: array,
  tech: array,
  softSkills: array,
};

Job.defaultProps = {
  achievements: [],
  exampleTasks: [],
  tech: [],
  softSkills: [],
};
