import { mount } from "enzyme";

const Title = ({ label }) => <h1>{label}</h1>;

/** @test {Title Component} */
describe("Title Component", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Title label="test" />);

    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
