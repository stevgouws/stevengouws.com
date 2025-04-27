import { formatDistanceToNowStrict } from "date-fns";

export function getNumberOfYearsFromDate(date: Date): string {
  const [numberOfYears] = formatDistanceToNowStrict(date, {
    unit: "year",
    roundingMethod: "floor",
  }).split(" ");
  return numberOfYears;
}

export const numberOfYearsExperience = getNumberOfYearsFromDate(
  new Date("2015-09-01")
);
