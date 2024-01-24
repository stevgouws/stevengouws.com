import Button from "../components/Button";
import Quotes from "../containers/quotes";

export default function Home() {
  return (
    <div>
      <main>
        <section className="max-w-3xl pt-12 pb-16 md:pt-16 md:pb-24 xl:py-48 px-8 md:px-24 xl:px-48 box-border">
          <div className="flex items-baseline flex-col print:flex-row">
            <ProfilePic className="mb-12" />
            <h1 className="text-5xl mb-0 leading-none font-sansAlt font-bold">
              Steven Gouws
            </h1>
            <h2 className="text-3xl font-normal">Full-stack developer</h2>
            <p>
              I’m a Full-stack developer with <b>8 years experience</b> building
              web apps commercially.
            </p>
            <p>
              I <b>love</b> what I do and care deeply about how what I build
              translates into <b>user experience</b>.
            </p>
            <Button
              className="mt-12"
              onClick={() => {
                window.location.href = "/cv";
              }}
            >
              Check out my CV
            </Button>
          </div>
        </section>
        <section className="bg-teal-highlightLight py-24 flex flex-col items-center justify-center">
          <Quotes />
        </section>
      </main>

      <style jsx>{`
        main {
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }

        p {
          font-size: 1.125rem;
        }
      `}</style>
    </div>
  );
}

function ProfilePic({ className = "" }) {
  return (
    <div className={className}>
      <div className="clip-circle bg-teal-highlight pt-4">
        <img
          src={"./steven-profile-pic.webp"}
          alt={"Head-shot photo of Steven Gouws"}
        />
      </div>
      <style jsx>{`
        img {
          position: relative;
          left: 5px;
          mix-blend-mode: luminosity;
        }

        .clip-circle {
          width: 150px;
          clip-path: circle(50% at 50% 50%);
        }
      `}</style>
    </div>
  );
}
