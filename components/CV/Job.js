import { string, array, oneOfType, bool, any } from "prop-types";
import Icon from "../common/Icon";
import List from "../common/List";
import Section from "../common/Section";
import Duration from "../CV/Duration";

export default function Job({
  children,
  hideHrForPrint,
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
    <Section hideHrForPrint={hideHrForPrint}>
      <Heading />
      <div className="mb-4 flex justify-between flex-col lg:flex-row print:flex-row">
        <div className="flex-1">
          <Achievements />
          <Tasks />
        </div>
        <div className="flex mt-4 lg:w-1/4 lg:block lg:mt-0 lg:ml-4 print:w-1/4 print:block print:mt-0 print:ml-4">
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
        <h3 className="lg:mb-0 print:mb-0">
          {position}
          <span className="text-gray-500 font-normal">
            <span className="hidden lg:inline"> |</span>
          </span>{" "}
          <span className="block lg:inline print:inline">{company}</span>
        </h3>
        <div
          className={`flex-col flex lg:flex-row print:flex-row ${
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

  function RightColItem({ heading, items, noWrap, classes = "" }) {
    if (!items.length) return null;
    return (
      // SG_TODO:  remove shrink?
      <div className={`flex-shrink-0 ${classes}`.trim()}>
        <h4 className="mb-0">{heading}</h4>
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
        classes="ml-4 lg:mt-4 print:mt-4 lg:ml-0 print:ml-0"
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
  hideHrForPrint: bool,
  location: any,
  position: any,
  softSkills: array,
  tech: array,
};

Job.defaultProps = {
  hideHrForPrint: false,
  achievements: [],
  exampleTasks: [],
  tech: [],
  softSkills: [],
};
