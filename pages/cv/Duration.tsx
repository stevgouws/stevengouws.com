import Icon from "../../components/Icon";

interface DurationProps {
  duration: string;
}

export default function Duration({ duration }: DurationProps) {
  return <Icon name="calendar" text={duration} />;
}
