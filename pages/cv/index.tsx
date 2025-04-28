import Paper from "../../components/Paper";
import Link from "../../components/Link";
import Section from "../../components/Section";
import List, { ListItems } from "../../components/List";
import Icon from "../../components/Icon";
import Duration from "./Duration";
import Jobs from "./Jobs";
import { getNumberOfYearsFromDate, numberOfYearsExperience } from "../../utils";

export default function CV() {
  return (
    <Paper>
      <>
        <Section>
          <div className='flex-col flex justify-between items-baseline lg:flex-row print:flex-row'>
            <div className='flex flex-col flex-2'>
              <Heading />
              <Introduction />
            </div>
            <ContactDetails />
          </div>
        </Section>
        <Jobs />
        <Section>
          <HospitalityCareer />
          <Education />
          <Hobbies />
        </Section>
      </>
    </Paper>
  );
}

function Heading() {
  return (
    <div className='mb-4 items-baseline lg:flex lg:mb-0 print:flex print:mb-0'>
      <h2 className='mb-0 lg:mb-4 print:mb-4'>Steven Gouws</h2>
      <style jsx>
        {`
          h2 {
            font-size: 2.25rem;
          }
        `}
      </style>
    </div>
  );
}

function Introduction() {
  return (
    <>
      <p>
        I'm a friendly, self-sufficient Software Engineer with{" "}
        {numberOfYearsExperience} years commercial experience in shipping code
        to users and working in cross-functional teams.
      </p>
      <p className='mb-0'>
        I'm always keen to learn and grow my skills. I get a kick out of it
        every single time I learn a shorter, cleaner, faster or more
        maintainable way to build something and I use{" "}
        <Link href='https://ncase.me/remember/' target='_blank'>
          spaced repetition learning
        </Link>{" "}
        daily to help cement new concepts.
      </p>
    </>
  );
}

function ContactDetails() {
  return (
    <div className='mt-4 lg:ml-4 lg:flex-1 lg:mt-0 print:ml-4 print:flex-1 print:mt-0'>
      <h3 className='lg:hidden print:hidden'>Contact Details</h3>
      <div>Upper Addison Gardens</div>
      <div>West Kensington</div>
      <div>London</div>
      <div className='mb-4'>W14 8AP</div>
      <Link displayBlock href='tel:+447780743335'>
        07780743335
      </Link>
      <Link displayBlock href='mailto:steven@stevengouws.com'>
        steven@stevengouws.com
      </Link>
      <Link displayBlock href='https://stevengouws.com/' target='_blank'>
        https://stevengouws.com/
      </Link>
      <Link displayBlock href='https://github.com/stevgouws' target='_blank'>
        github.com/stevgouws
      </Link>
    </div>
  );
}

interface TwoColumnsProps {
  heading: string;
  location: string;
  duration: string;
  children: ListItems[number];
}

function TwoColumns({
  heading,
  location,
  duration,
  children,
}: TwoColumnsProps) {
  return (
    <div className='mb-4 flex flex-col lg:items-center lg:justify-between lg:flex-row print:items-center print:justify-between print:flex-row'>
      <div>
        <h3>{heading}</h3>
        {(location || duration) && (
          <div className='flex flex-col mb-4 lg:mb-0 print:mb-0'>
            <Icon name='location' text={location} className='mr-2' />
            <Duration duration={duration}></Duration>
          </div>
        )}
      </div>
      <div className='lg:w-9/12 print:w-9/12'>{children}</div>
    </div>
  );
}

function Education() {
  return (
    <TwoColumns
      heading='Education'
      location='South Africa'
      duration='2001 - 2004'
    >
      <List
        items={[
          "Diploma in Computer Systems Engineering - Damelin College",
          "CompTIA A+ and N+ certified",
          "Passed 6 International Microsoft MCSE exams",
          "Matriculated with merit and a distinction in English",
        ]}
      />
    </TwoColumns>
  );
}

function HospitalityCareer() {
  return (
    <TwoColumns heading='Hospitality' location='London' duration='2004 - 2015'>
      Before tech, I worked in the hospitality industry, starting as a security
      guard with zero experience. I worked my way up to Senior Guest Service
      Manager and directly managed a team of 11 Guest Service Managers at a 300
      bedroom, 4-star hotel in Central London.
    </TwoColumns>
  );
}

function Hobbies() {
  return (
    <div className='mb-4 lg:flex lg:items-center lg:justify-between print:flex print:items-center print:justify-between'>
      <h3 className='lg:mb-0 print:mb-0'>Hobbies</h3>
      <div className='lg:w-9/12 lg:flex print:w-9/12 print:flex'>
        <List
          items={["Reading", "Tinkering with my custom keyboard config"]}
          className='flex-1'
        />
        <List
          items={[
            "Playing guitar",
            `Hanging out with that crazy cat, my ${getNumberOfYearsFromDate(
              new Date("2018-01-13")
            )}-year-old daughter Zoe`,
          ]}
          className='flex-2'
        />
      </div>
    </div>
  );
}
