import List from "../../components/List";
import Job from "./Job";
import Link from "../../components/Link";

export default function Jobs() {
  return (
    <>
      <Job
        company="Fika Community Ltd"
        position="Senior Software Engineer"
        duration="May 2021 – Current"
        location="Fully remote, based in London"
        achievements={[
          "Promoted to Senior Software Engineer after a year",
          "Lead on several features and took ownership of deploys and releases",
          "Introduced and became the go-to source of knowledge for Playwright E2E testing across the engineering team",
          "Continuously reduced technical debt by refactoring and retiring various legacy features",
          "De-flaked lots of long running flaky E2E and integration tests, some due to subtle race conditions",
        ]}
        exampleTasks={[
          <>
            Did a spike for implementing enterprise SSO and documented findings
            - see{" "}
            <Link
              href="https://drive.google.com/file/d/11Wz9w-vXjOY-PlyNXQQ9HuLU5t3fsb76/view?usp=sharing"
              target="_blank"
            >
              SSO Spike.pdf
            </Link>
          </>,
          "Specced out the db architecture for adding the concept of teams and team-stats for our users",
          "Converted our backend from Common JS to ESM to remove build step and speed up the testing feedback-loop",
          "Wrote various scripts to compile data to spreadsheets",
          <>
            Built data charts using VictoryCharts
            <List
              items={[
                <Link
                  href="https://drive.google.com/file/d/1cgIUo-5rBYPXlN1kyjkI4OFAi1-oZB4P/view?usp=sharing"
                  target="_blank"
                  key="mfq"
                >
                  Mental Fitness quiz results chart
                </Link>,
                <Link
                  href="https://drive.google.com/file/d/1SE78Rkx5MmD7H2dw-z2ZVMaTA0SI31Hg/view?usp=sharing"
                  target="_blank"
                  key="engagement"
                >
                  Engagement over time chart
                </Link>,
              ]}
            />
          </>,
          "Developed new features and robust UI components in React and React Native",
          "Aligned with the design team to ensure we have consistency between our design system and component library in Figma and in code",
          "Wrote NodeJS apis, implemented pubsub events and scheduled jobs with Firebase & GCP",
          "Wrote Firestore data migrations",
          "Implemented push-notifications using React Native and Firebase Messaging",
          "Set up consistent linting and code formatting across all our projects",
        ]}
        techStack={[
          "React & Redux",
          "NextJS",
          "React Native",
          "NodeJS",
          "Firebase",
          "GCP",
          "Playwright",
          "Mocha",
          "Appium",
          "Detox",
          "Elasticsearch",
          "MUI",
          "Travis CI",
          "Contentful",
        ]}
        softSkills={[
          "Line management & mentoring",
          "Agile",
          "Code reviews",
          "Feature spikes",
          "Presentations",
          "Pair programming",
          "Interviewing",
        ]}
      >
        <p>
          At Fika we're trying to teach skills to avoid burnout and to bring
          Mental Fitness to the world. I work across the stack using JavaScript
          in our NextJS{" "}
          <Link href="https://app.fika.community/welcome/" target="_blank">
            Web App
          </Link>
          , React Native based{" "}
          <Link
            href="https://apps.apple.com/gb/app/fika/id1465248342"
            target="_blank"
          >
            iOS
          </Link>{" "}
          &{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=community.fika.app.prod&hl=en_GB&gl=US"
            target="_blank"
          >
            Android
          </Link>{" "}
          apps and NodeJS based Firebase backend.
        </p>
      </Job>
      <Job
        company="Ingresso Group Ltd"
        position="Front-End Engineer"
        duration="March 2019 – May 2021"
        location="London"
        achievements={[
          "Learned and started contributing quickly even though it was a mostly unfamiliar tech-stack",
          "Reduced unaddressed technical debt by refactoring a lot of legacy AngularJS code and improving documentation",
          "Increased test coverage for untested parts of the application",
          "Surfaced and fixed a nasty bug in the general error handling strategy that caused a lot of user-facing errors to go unnoticed",
        ]}
        exampleTasks={[
          "Worked out and implemented a strategy to modularise Selenium tests for easy re-use so that you can compose tests bundles out of existing tests",
          "Implemented Stripe Card integration to support SCA-2 ",
          "Implemented dynamic pricing for ticket insurance depending on total ticket prices",
          "Developed new features and robust UI components in React and AngularJS",
          <>
            Designed and created{" "}
            <Link
              href="https://user-images.githubusercontent.com/13498291/57140095-dbbf5f80-6dae-11e9-970a-923e819a8eca.png"
              target="_blank"
            >
              mock-ups
            </Link>{" "}
            (left side) for Special Offer and other info indicators for our
            event calendar.
          </>,
        ]}
        techStack={[
          "React & Redux",
          "AngularJS",
          "Jest",
          "Jasmine",
          "Enzyme",
          "React Testing Library",
          "Selenium",
          "NodeJS",
          "Less",
          "Python & Pytest",
          "Django",
        ]}
      >
        <p>
          I worked mainly on the Front-End of our White-label product for
          selling event and theatre tickets. We ran the White-label under our
          own{" "}
          <Link
            href="https://www.fromtheboxoffice.com/category/162-theatre/"
            target="_blank"
          >
            From The Box Office
          </Link>{" "}
          brand where we sold directly to an average of about 500,000 unique
          monthly visitors.
        </p>
        <p>
          We also had clients who used our product (or parts thereof) under
          their brands. For example,{" "}
          <Link
            href="https://theatre.ticketmaster.co.uk/book/1F1W0-tina-the-tina-turner-musical/"
            target="_blank"
          >
            Ticketmaster
          </Link>{" "}
          who used our Booking App and Checkout for theatre shows.
        </p>
      </Job>
      <Job
        company="Ebit Technologies"
        position="Software Developer"
        duration={"Apr 2016 – Feb 2019"}
        location="Cape Town"
        achievements={[
          "Promoted from Junior to Intermediate after just over a year",
          'Received the "most improved developer" award in April 2017',
          "As Intermediate I oversaw and partly managed and helped guide the development of two Junior Developers",
        ]}
        exampleTasks={[
          "Built a component library with Vue for our main app",
          "Updated codebase from Vue 1 to Vue 2 and Vuex 1 to Vuex 3",
          "Rebuilt Web Sockets from scratch using Node for real-time communication between agents",
          "Implemented a large redesign on an app-wide level",
          "Conducted code reviews for Juniors",
          <>
            Designed and implemented a{" "}
            <Link
              href="https://drive.google.com/open?id=1-cA2iYg0FC9HHma9PgHykmBVjRCMY9qj"
              target="_blank"
            >
              Transaction Status component
            </Link>
          </>,
        ]}
        techStack={[
          "VueJS",
          "Laravel (PHP)",
          "JavaScript (ES5, ES6)",
          "HTML, CSS & Stylus",
          "NodeJS",
          "SQL Server",
          "Git",
          "Linux (Ubuntu)",
          "Redis",
          "Docker",
          "Electron",
          "Nginx",
          "Web Sockets",
        ]}
      >
        <p>
          At Ebit, we developed web applications and also one mobile app. Our
          main application was call-centre dialling software for debt collection
          on behalf of companies and also the South African government tax
          service.
        </p>
      </Job>
      <Job
        company="Admakers International"
        position="Web Developer"
        duration="September 2015 – March 2016"
        location="Cape Town"
        techStack={["Wordpress", "Photoshop"]}
        exampleTasks={[
          "I was part of a small web team building and maintaining Wordpress websites and converting designs to HTML emails",
        ]}
      />
    </>
  );
}
