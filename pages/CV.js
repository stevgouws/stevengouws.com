import Layout from "../components/common/Layout";
import Link from "../components/common/Link";
import Section from "../components/common/Section";
import List from "../components/common/List";
import Job from "../components/CV/Job";

export default function CV() {
  return (
    <Layout>
      <Section>
        <div className="flex justify-between items-baseline">
          <div className="flex flex-col">
            <Heading />
            <Introduction />
          </div>
          <ContactDetails classes="ml-8" />
        </div>
      </Section>
      <Section>
        <Job
          company="Ingresso Group Ltd"
          position="Front-End Engineer"
          duration="March 2019 – current"
          location="London"
          achievements={[
            "Refactored a lot of legacy AngularJS code reducing technical debt",
            "Increased test coverage for parts of application that was previously untested",
            "Surfaced and fixed a bug in the general error handling strategy that caused a lot of user facing errors to be discarded and go unnoticed",
          ]}
          exampleTasks={[
            "Worked out and implemented a strategy to modularise Selenium tests for easy re-use so that you can compose tests out of other tests",
            "Implemented Stripe Card integration to support SCA-2 ",
            "Implemented dynamic pricing for ticket insurance depending on total ticket prices",
            "Built and maintained a bunch of React and AngularJS components",
            <>
              Designed and created mock-ups for Special Offer and other info
              indicators for our event calendar. An example can be seen on left
              side of the page{" "}
              <Link
                href="https://user-images.githubusercontent.com/13498291/57140095-dbbf5f80-6dae-11e9-970a-923e819a8eca.png"
                target="_blank"
              >
                here
              </Link>{" "}
              . (The right side was pre-existing).
            </>,
          ]}
          tech={[
            "React & Redux",
            "AngularJS",
            "Jest",
            "Jasmine",
            "Enzyme",
            "React Testing Library",
            "Selenium",
            "NodeJS",
            "Less",
            "Google Optimise",
            "Python & Pytest",
            "Django",
            "Bash Scripting",
          ]}
        >
          <p>
            I work mainly on a White-label for selling event and theatre
            tickets. We run the White-label under our own{" "}
            <Link
              href="https://www.fromtheboxoffice.com/category/162-theatre/"
              target="_blank"
            >
              From The Box Office
            </Link>{" "}
            brand where we sell directly to an average of about 500,000 unique
            monthly visitors.
          </p>
          <p>
            We also have clients who use our White-label (or parts thereof)
            under their own brands. For example,{" "}
            <Link
              href="https://theatre.ticketmaster.co.uk/book/17ZC6-sister-act-the-musical/"
              target="_blank"
            >
              Ticketmaster
            </Link>{" "}
            who uses our Booking App and Checkout for theatre shows.
          </p>
          <p></p>
        </Job>
        <Job
          company="Ebit Technologies"
          position="Software Developer"
          duration={[
            "April 2016 – June 2017 | Junior",
            "June 2017 – February 2019 | Intermediate",
          ]}
          location="Cape Town"
          achievements={[
            "Promoted from Junior to Intermediate after just over a year",
            'Received the "most improved developer" award in April 2017',
          ]}
          exampleTasks={[
            "Built a component library with Vue for the app",
            "Updated codebase from Vue 1 to Vue 2 and Vuex 1 to Vuex 3",
            "Rebuilt Web Sockets from scratch using Node for real time communication between agents",
            "Built real time communication for agents with Websockets",
            "Implemented a large redesign on an app-wide level",
          ]}
          tech={[
            "VueJS",
            "Laravel (PHP)",
            "Javascript (ES5, ES6)",
            "HTML, CSS & Stylus",
            "NodeJS",
            "SQL Server",
            "Git",
            "Linux (Ubuntu)",
            "Wordpress",
            "Redis",
            "Docker",
            "Electron",
            "Nginx",
            "Websockets",
          ]}
        >
          <p>
            At Ebit we developed web applications and a mobile app. Our main
            application was call-centre dialing software for debt collection on
            behalf of companies and also the South African government tax
            service.
          </p>
        </Job>
        <Job
          company="Admakers International"
          position="Web Developer"
          duration="September 2015 – March 2016"
          location="Cape Town"
          tech={["Wordpress", "Photoshop"]}
          isSimple
        >
          <p>
            I was part of a small web team building and maintaining client
            websites and converting designs to html emails.
          </p>
        </Job>
      </Section>
      <Section>
        <h3>Formal Education</h3>
        <List
          items={[
            "Diploma in Computer Systems Engineering (2 years), Damelin College, Bloemfontein South Africa (2003) ",
            "6 Microsoft International MCSE exams passed (2004)",
            "Comptia A+ and N+ certified (2004)",
            " Matriculated with merit and received a distinction in English, Goudveld High School, Welkom, South Africa (2001) ",
          ]}
        />
      </Section>
    </Layout>
  );
}

function Heading() {
  return (
    <div className="flex items-baseline">
      <h1>Steven Gouws</h1>
      <span className="ml-2">Javascript Developer</span>
    </div>
  );
}

function Introduction() {
  return (
    <div>
      <p>
        I’m a quick learner, very self sufficient and always keen to learn and
        grow my skills. I would love to work for an organisation that supports
        and encourages this. <br />
      </p>
      <p>
        I get a kick out of it every single time I learn a shorter, cleaner,
        faster or more maintainable way to code something and I use{" "}
        <Link href="https://sivers.org/srs" target="_blank">
          spaced repetition learning
        </Link>{" "}
        on a daily basis to help cement new things I learn.
      </p>
    </div>
  );
}

function ContactDetails({ classes }) {
  return (
    <div className={classes}>
      <div>21 Upper Addison Gardens</div>
      <div>West Kensington</div>
      <div>London</div>
      <div className="mb-4">W14 8AP</div>
      <Link displayBlock href="tel:+447780743335" icon="phone">
        07780743335
      </Link>
      <Link displayBlock href="mailto:steven@stevengouws.com" icon="email">
        steven@stevengouws.com
      </Link>
      <Link
        displayBlock
        href="https://github.com/stevgouws"
        icon="globe"
        target="_blank"
      >
        github.com/stevgouws
      </Link>
    </div>
  );
}
