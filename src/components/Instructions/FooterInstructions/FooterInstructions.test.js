import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FooterInstructions from "./FooterInstructions";

const mockOnClick = jest.fn();
const renderWithInput = activePage => {
  return <FooterInstructions activePage={activePage} setActivePage={mockOnClick} />;
};

test("correctly renders page forward and page back signs", () => {
  const { rerender } = render(renderWithInput(1));
  screen.getByRole("img", { name: /page forward/i });
  expect(screen.queryByRole("img", { name: /page back/i })).toBeNull();

  rerender(renderWithInput(2));
  screen.getByRole("img", { name: /page forward/i });
  expect(screen.queryByRole("img", { name: /page back/i })).toBeInTheDocument();

  rerender(renderWithInput(3));
  expect(screen.queryByRole("img", { name: /page forward/i })).not.toBeInTheDocument();
  expect(screen.getByRole("img", { name: /page back/i })).toBeInTheDocument();
});

test("onClick event is called on both buttons", () => {
  render(renderWithInput(2));
  const btnNext = screen.getByRole("button", { name: /page forward/i });
  const btnBack = screen.getByRole("button", { name: /page back/i });
  userEvent.click(btnNext);
  userEvent.click(btnBack);
  expect(mockOnClick).toHaveBeenCalledTimes(2);
});

test("setActiveFunction should have been called", () => {
  const mock = jest.fn();
  const { getByTestId } = render(
    <FooterInstructions activePage={1} setActivePage={mock} />
  );
  const btnNext = screen.getByRole("button", { name: /page forward/i });
  const span = screen.getByTestId("active-page");
  userEvent.click(btnNext);
  expect(span).toHaveTextContent(1);
  expect(mock).toHaveBeenCalledTimes(1);
});
