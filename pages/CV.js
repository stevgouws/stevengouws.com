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
          date="March 2019 – current"
          location="London"
        />
        <h3>Software Developer - Ebit Technologies</h3>
        <p>Intermediate: June 2017 – February 2019</p>
        <p>Junior: April 2016 – June 2017</p>
        <p>
          At Ebit we develop web applications and a few mobile apps. Our main
          application is dialing software that centers around debt collection on
          behalf of big commercial companies and also the South African
          government tax service.
        </p>
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
