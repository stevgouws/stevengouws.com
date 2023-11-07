import Paper from "../../components/Paper";
import Section from "../../components/Section";

export default function Typography() {
  const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const headingStrings = headingTags.map((tag) => {
    return `<${tag}>A Visual Type Scale</${tag}>`;
  });
  return (
    <Paper>
      <div>
        {headingStrings.map((heading) => (
          <Section key={heading}>
            <div
              dangerouslySetInnerHTML={{
                __html: heading,
              }}
            ></div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              voluptas error eum voluptate tempore repellat explicabo autem, non
              ea alias dolores reprehenderit adipisci ipsa aut laudantium
              ducimus! Nam, reiciendis consequuntur.
            </p>
          </Section>
        ))}
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
