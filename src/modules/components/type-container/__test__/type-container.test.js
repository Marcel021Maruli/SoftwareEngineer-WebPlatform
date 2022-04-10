import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import TypeContainer from "..";

describe("<TypeContainer />", () => {
  test("should render the right", () => {
    const { getByTestId } = render(
      <TypeContainer data-testid="TypeContainer-testid" content="grass" />,
    );
    expect(getByTestId("TypeContainer-testid")).toBeInTheDocument();
  });
 
  test("should have the right content when it's set", () => {
    const { getByTestId } = render(
      <TypeContainer data-testid="TypeContainer-testid" content="grass" />,
    );
    const { getByText } = within(getByTestId("TypeContainer-content-testid"));
    expect(getByText("Grass")).toBeInTheDocument();
  });

  test("should have the right className when the content is set", () => {
    const { getByTestId } = render(
      <TypeContainer data-testid="TypeContainer-testid" content="grass" />,
    );
    expect(getByTestId("TypeContainer-testid")).toHaveClass("grass");
  });
});
