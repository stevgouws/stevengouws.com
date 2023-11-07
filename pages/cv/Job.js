import Icon from "../../components/Icon";
import List from "../../components/List";
import Section from "../../components/Section";
import Duration from "./Duration";

export default function Job({
  children,
  company,
  position,
  duration,
  location,
  achievements = [],
  exampleTasks = [],
  techStack = [],
  softSkills = [],
}) {
  return (
    <Section>
      <Heading
        position={position}
        company={company}
        duration={duration}
        location={location}
      />
      {children}
      <div className="mb-4 flex justify-between flex-col md:flex-row print:flex-row">
        <div className="flex-1">
          {achievements.length > 0 ? (
            <div className="mb-4">
              <h4>Achievements</h4>
              <List items={achievements} />
            </div>
          ) : null}
          <div>
            <h4>Some things I worked on</h4>
            <List items={exampleTasks} />
          </div>
        </div>
        <div className="flex mt-4 md:w-1/4 md:block md:mt-0 md:ml-4 print:w-1/4 print:block print:mt-0 print:ml-4">
          <div>
            <h4>Tech</h4>
            <List items={techStack} noWrap styleType="dash" styleInside />
          </div>
          {softSkills.length > 0 ? (
            <div className="ml-8 md:mt-4 print:mt-4 md:ml-0 print:ml-0">
              <h4>Soft Skills</h4>
              <List items={softSkills} styleType="dash" styleInside />
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

function Heading({ position, company, location, duration }) {
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
      <div className="flex-col flex md:flex-row print:flex-row">
        <Icon name="location" text={location} classes="mr-2" />
        <Duration duration={duration} />
      </div>
    </div>
  );
}
