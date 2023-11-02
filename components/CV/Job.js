import { string, array, oneOfType, bool, any } from "prop-types";
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
      <div>
        {children}
        <p></p>
      </div>
      <div className="mb-4 flex justify-between flex-col md:flex-row print:flex-row">
        <div className="flex-1">
          <Achievements />
          <Tasks />
        </div>
        <div className="flex mt-4 md:w-1/4 md:block md:mt-0 md:ml-4 print:w-1/4 print:block print:mt-0 print:ml-4">
          <Tech />
          <SoftSkills />
        </div>
      </div>
    </Section>
  );

  function Heading() {
    return (
      <div className="my-4">
        <h3>
          {position}
          <span className="text-gray-500 font-normal">
            <span className="hidden md:inline print:inline"> |</span>
          </span>{" "}
          <span className="block md:inline print:inline text-lg md:text-2xl print:text-2xl">
            {company}
          </span>
        </h3>
        <div
          className={`flex-col flex md:flex-row print:flex-row ${
            Array.isArray(duration) ? "justify-between" : ""
          }`}
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
        <h4>Achievements</h4>
        <List items={achievements} />
      </div>
    );
  }

  function Tasks() {
    if (!exampleTasks.length > 0) return null;
    return (
      <div>
        <h4>Some things I worked on</h4>
        <List items={exampleTasks} />
      </div>
    );
  }

  function RightColItem({ heading, items, noWrap, classes = "" }) {
    if (!items.length) return null;
    return (
      <div className={classes}>
        <h4>{heading}</h4>
        <List items={items} noWrap={noWrap} styleType="dash" styleInside />
      </div>
    );
  }

  function Tech() {
    return <RightColItem heading="Tech" items={tech} noWrap />;
  }

  function SoftSkills() {
    return (
      <RightColItem
        heading="Soft Skills"
        items={softSkills}
        classes="ml-4 md:mt-4 print:mt-4 md:ml-0 print:ml-0"
      />
    );
  }
}

Job.propTypes = {
  achievements: array,
  children: any,
  company: string.isRequired,
  duration: oneOfType([string.isRequired, array.isRequired]),
  exampleTasks: array,
  location: any,
  position: any,
  softSkills: array,
  tech: array,
};

Job.defaultProps = {
  achievements: [],
  exampleTasks: [],
  tech: [],
  softSkills: [],
};
