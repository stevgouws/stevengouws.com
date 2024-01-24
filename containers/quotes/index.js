import { useState } from "react";
import Carousel from "../../components/Carousel";
import { QuoteCard } from "./QuoteCard";
import { quotes } from "./quote-data";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../components/Tooltip";

export default function Quotes() {
  return (
    <section className="max-w-full md:max-w-3xl">
      <h3 className="text-gray-900 font-sansAlt font-bold text-center pb-4 px-8 m-0">
        Kind words from colleagues
        <MoreInfo />
      </h3>
      <Carousel className="md:px-8">
        {quotes.map((author) => {
          return (
            <QuoteCard
              key={author.quote}
              name={author.name}
              title={author.title}
              quote={author.quote}
              profilePicFileName={author.profilePicFileName}
              profilePicAlt={`Head-shot of ${author.name}`}
              linkedInUrl={author.linkedInUrl}
            />
          );
        })}
      </Carousel>
    </section>
  );
}

function MoreInfo() {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
      <TooltipTrigger
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          fontSize: "1rem",
          color: "red",
          cursor: "help",
          position: "absolute",
        }}
      >
        *
      </TooltipTrigger>
      <TooltipContent>
        Extracts from our last review cycle at Fika with permission
      </TooltipContent>
    </Tooltip>
  );
}
