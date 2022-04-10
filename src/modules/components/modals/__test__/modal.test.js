import { render, screen } from "@testing-library/react";
import Modal from "../";

describe("<Modal />", () => {
  test("should render the right component", () => {
    render(<Modal data-testid="Modal-testid" />);
    expect(screen.getByTestId("Modal-testid")).toBeDefined();
  });
  test("should have class of 'display-block' when have 'showModal' set true", () => {
    render(<Modal data-testid="Modal-testid" showModal={true} />);
    expect(screen.getByTestId("Modal-container-testid")).toHaveClass(
      "u-display-block",
    );
  });

  test("should have class of 'display-none' when have 'showModal' set false or not set up", () => {
    render(<Modal data-testid="Modal-testid" />);
    expect(screen.getByTestId("Modal-container-testid")).toHaveClass(
      "u-display-none",
    )
  })
})
