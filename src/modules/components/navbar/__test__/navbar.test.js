import { render } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../";

describe("<Navbar />", () => {
  const wrapper = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  it("should match with a snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default className", () => {
    expect(wrapper.hasClass("Navbar")).toBeTruthy();
  });
});
