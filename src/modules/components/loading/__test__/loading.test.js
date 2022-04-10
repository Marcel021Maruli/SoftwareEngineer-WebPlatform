import { render, screen } from "@testing-library/react";
import Loading from "../";

describe("<Loading />", () => {
  test("should render the right component", () => {
    render(<Loading data-testid="Loading-testid" isLoading={true} />);
    expect(screen.getByTestId("Loading-testid")).toBeDefined();
  });

  test("should not show up when isLoading is not set up", () => {
    render(<Loading data-testid="Loading-testid" />);
    expect(screen.queryByAltText("loading")).toBeNull();
  });

  test("should show up when isLoading is set", () => {
    render(<Loading data-testid="Loading-testid" isLoading />);
    expect(screen.queryByAltText("loading")).toBeDefined();
  });
});
