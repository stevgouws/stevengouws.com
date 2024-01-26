import React from "react";
import Button from "../components/Button";
import Quotes from "../containers/quotes";
import { numberOfYearsExperience } from "../utils";

export default function Home() {
  const quotesSectionRef = React.useRef(null);
  return (
    <div>
      <main>
        <section className="max-w-3xl pt-12 pb-16 md:pt-16 md:pb-24 xl:py-48 px-8 md:px-24 box-border relative">
          <div className="flex items-baseline flex-col print:flex-row">
            <ProfilePic className="mb-12" />
            <h1 className="text-5xl mb-0 leading-none font-sansAlt font-bold">
              Steven Gouws
            </h1>
            <h2 className="text-3xl font-normal">Full-stack developer</h2>
            <p>
              I’m a Full-stack developer with{" "}
              <b>{numberOfYearsExperience} years experience</b> building web
              apps commercially.
            </p>
            <p>
              I <b>love</b> what I do and care deeply about how what I build
              translates into <b>user experience</b>.
            </p>
            <div className="mt-12 flex gap-2 md:gap-4 flex-col md:flex-row">
              <div className="flex-shrink-0">
                <Button
                  className="width-full"
                  onClick={() => {
                    window.location.href = "/cv";
                  }}
                >
                  Check out my CV
                </Button>
              </div>
              <ScrollDown
                onClick={() => {
                  quotesSectionRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </div>
          </div>
        </section>
        <section
          className="bg-teal-highlightLight py-24 flex flex-col items-center justify-center"
          ref={quotesSectionRef}
        >
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

function ScrollDown({ onClick }) {
  return (
    <div className="scroll-down">
      <div className="text" aria-hidden>
        <div>or kind words from colleagues</div>
      </div>
      <img
        src="./hand-drawn-arrow.webp"
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-label="or kind words from colleagues"
      />
      <style jsx>
        {`
          .scroll-down {
            display: flex;
            align-items: center;
          }

          .text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          img {
            cursor: pointer;
            height: 40px;
            position: relative;
            top: 11px;
            left: 3px;
          }

          @media (max-width: 640px) {
            .scroll-down {
              margin-left: 4px;
            }
          }
        `}
      </style>
    </div>
  );
}
