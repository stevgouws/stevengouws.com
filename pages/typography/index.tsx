import Paper from "../../components/Paper";
import Section from "../../components/Section";

type HeadingLevel = Extract<
  keyof JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;
const headingLevels: HeadingLevel[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

export default function Typography() {
  return (
    <Paper>
      <div>
        {headingLevels.map((Heading: HeadingLevel) => {
          return (
            <Section key={Heading}>
              <Heading>A Visual Type Scale</Heading>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit voluptas error eum voluptate tempore repellat explicabo
                autem, non ea alias dolores reprehenderit adipisci ipsa aut
                laudantium ducimus! Nam, reiciendis consequuntur.
              </p>
            </Section>
          );
        })}
        <Section>
          <h6>Some really small text</h6>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            doloremque illo molestias eveniet, esse eaque nostrum nihil cum
            sapiente nobis, earum cupiditate numquam eos incidunt. Eum officia
            dolore ratione autem.
          </p>
        </Section>
        <Section>
          <h6>Some really REALLY small text</h6>
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            doloremque illo molestias eveniet, esse eaque nostrum nihil cum
            sapiente nobis, earum cupiditate numquam eos incidunt. Eum officia
            dolore ratione autem.
          </p>
        </Section>
      </div>
    </Paper>
  );
}
