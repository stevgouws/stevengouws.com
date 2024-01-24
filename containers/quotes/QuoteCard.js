export function QuoteCard({
  name,
  title,
  quote,
  profilePicFileName,
  profilePicAlt,
  linkedInUrl,
}) {
  return (
    <>
      <div className="review-card-wrapper">
        <div
          className="review-card bg-white px-8 py-6 rounded-md"
          title={`View ${name}'s profile on LinkedIn`}
          onClick={() => {
            window.open(linkedInUrl, "_blank", "noopener");
          }}
        >
          <h4 className="name text-gray-800 leading-none m-0">{name}</h4>
          <h6 className="title text-gray-800 leading-tight m-0">{title}</h6>
          <img
            className="pic"
            src={`./${profilePicFileName}`}
            alt={profilePicAlt}
          />
          <div className="relative quote-wrapper">
            <div className="italic quote">
              <p key={quote}>{replaceAsterisksWithBoldTags(quote)}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .review-card-wrapper {
            flex-shrink: 0;
            scroll-snap-align: start;
            max-width: 100%;
            display: flex;
            align-items: center;
          }

          .review-card {
            cursor: pointer;
          }

          .review-card:hover .name,
          .review-card:hover .title {
            text-decoration: underline;
          }

          .review-card {
            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            column-gap: 1.5rem;
            row-gap: 1.5rem;
            align-content: center;
          }

          .title {
            justify-self: end;
          }

          .pic {
            justify-self: center;
            height: 125px;
          }

          @media (max-width: 640px) {
            .review-card {
              grid-template-columns: auto 1fr;
              grid-template-rows: auto auto;
              row-gap: 0;
              column-gap: 0.5rem;
            }

            .pic {
              max-height: 75px;
              max-width: 75px;
              grid-row: 1/3;
              grid-column: 1;
              justify-self: start;
            }

            .name {
              grid-row: 1;
              grid-column: 2;
              align-self: end;
              justify-self: end;
              margin-bottom: 0.25rem;
              text-align: right;
            }

            .title {
              grid-row: 2;
              grid-column: 2;
              align-self: start;
              justify-self: end;
              text-align: right;
            }

            .quote-wrapper {
              grid-row: 3;
              grid-column: 1 / span 2;
              margin-top: 2rem;
            }
          }

          p:last-child {
            margin-bottom: 0;
          }

          img {
            clip-path: polygon(0 9%, 90% 0%, 100% 90%, 9% 100%);
          }

          .quote::before {
            content: "“";
            position: absolute;
            display: flex;
            left: -24px;
            top: -12px;
            font-size: 40px;
            line-height: 1em;
          }

          .quote::after {
            position: absolute;
            display: flex;
            right: 0;
            bottom: -28px;
            font-size: 40px;
            line-height: 1em;
            content: "”";
          }
        `}
      </style>
    </>
  );
}

function replaceAsterisksWithBoldTags(text) {
  const emphasisRegex = /\*(.*?)\*/g;
  const matches = text.matchAll(emphasisRegex);
  const emphasisRanges = [...matches].map((match) => ({
    start: match.index,
    end: match.index + match[0].length,
    text: match[1],
  }));

  const textParts = [];
  let lastEnd = 0;
  emphasisRanges.forEach((range) => {
    textParts.push(text.slice(lastEnd, range.start));
    textParts.push(<b>{range.text}</b>);
    lastEnd = range.end;
  });
  textParts.push(text.slice(lastEnd));

  return textParts;
}
