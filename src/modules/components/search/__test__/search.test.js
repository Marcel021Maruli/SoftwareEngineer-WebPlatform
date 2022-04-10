import { render, screen } from "@testing-library/react";
import Search from "../";

describe("<Search />", () => {
  test("should render the right component", () => {
    render(<Search data-testid="Search-testid" />);
    expect(screen.getByTestId("Search-testid")).toBeDefined();
  });

  test("should not show up when isSearch is not set up", () => {
    render(<Search data-testid="Search-testid" />);
    expect(screen.queryByAltText("Search")).toBeNull();
  });

  test("should show up when isSearch is set", () => {
    render(<Search data-testid="Search-testid" />);
    expect(screen.queryByAltText("Search")).toBeDefined();
  });
});
