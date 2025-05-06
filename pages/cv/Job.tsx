import Icon from "../../components/Icon";
import List from "../../components/List";
import Section from "../../components/Section";
import Duration from "./Duration";
import { ListItems } from "../../components/List";

export interface Job {
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements?: ListItems;
  exampleTasks: ListItems;
  techStack: ListItems;
  softSkills?: ListItems;
  showHrOnPrint?: boolean;
}

interface JobProps extends Job {
  children?: React.ReactNode;
}

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
  showHrOnPrint = false,
}: JobProps) {
  return (
    <Section showHrOnPrint={showHrOnPrint}>
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
        <div className="mt-4 md:w-1/4 md:mt-0 md:ml-4 print:w-1/4 print:mt-0 print:ml-4">
          <div>
            <h4>Tech</h4>
            <List items={techStack} noWrap styleTypeDash styleInside />
          </div>
          {softSkills.length > 0 ? (
            <div className="mt-4">
              <h4>Soft Skills</h4>
              <List items={softSkills} styleTypeDash styleInside />
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

function Heading({
  position,
  company,
  location,
  duration,
}: Pick<Job, "position" | "company" | "location" | "duration">) {
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
        <Icon name="location" text={location} className="mr-2" />
        <Duration duration={duration} />
      </div>
    </div>
  );
}
