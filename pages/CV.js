import Layout from "../components/common/Layout";
import Link from "../components/common/Link";
import Section from "../components/common/Section";
import Job from "../components/CV/Job";
import Icon from "../components/common/Icon";

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
          achievements={["One", "Two", "Three"]}
          tech={[
            "React & Redux",
            "AngularJS",
            "Jest",
            "Jasmine",
            "React Testing Library",
            "Python",
            "Django",
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          voluptatibus voluptatum minima repudiandae, culpa sapiente nobis
          necessitatibus numquam vel inventore, ratione odio fugit suscipit
          voluptatem architecto libero quia ex! Alias.
        </Job>
        <Job
          company="Ebit Technologies"
          position="Software Developer"
          duration="April 2016 – February 2017"
          location="Cape Town"
          achievements={[
            "I knew practically no programming at the start of this job but seized the opportunity and learned quickly",
            "Received the 'most improved developer' award in April 2017",
            "Promoted from Junior to Intermediate after just over a year",
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
          At Ebit we developed web applications and a mobile app. Our main
          application was call-centre dialing software for debt collection on
          behalf of companies and also the South African government tax service.
        </Job>
        <h4>Responsibilities:</h4>
        <ul>
          <li>Writing Back-End REST APIs mostly with Laravel</li>
          <li>
            Writing Front-End applications and single page apps mostly with Vue
            2
          </li>
          <li>Implementing pixel perfect styles from designs</li>
          <li>Attending meetings with clients etc. (Agile, Kanban)</li>
          <li>Finding and fixing bugs</li>
        </ul>
        <h5>This is h5</h5>
        <h6>This is h6</h6>
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
