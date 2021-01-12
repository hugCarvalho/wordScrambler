import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShowInstructionsOnLoad from "./ShowInstructionsOnLoad";

const toggle = jest.fn();
const renderWithInput = (customOptions = { showInstructionsOnLoad: true }) => {
  return (
    <ShowInstructionsOnLoad
      customOptions={customOptions}
      toggleShowInstructionsOnLoad={toggle}
      //checked={customOptions.showInstructionsOnLoad}
    />
  );
};

test("should ", () => {
  const { rerender } = render(renderWithInput());
  const checkbox = screen.getByRole("checkbox");

  expect(checkbox.checked).toBe(true);
  userEvent.click(checkbox);
  expect(toggle).toHaveBeenCalledTimes(1);

  rerender(renderWithInput({ showInstructionsOnLoad: false }));
  expect(checkbox.checked).toBe(false);
  userEvent.click(checkbox);
  expect(toggle).toHaveBeenCalledTimes(2);

  rerender(renderWithInput({ showInstructionsOnLoad: true }));
  expect(checkbox.checked).toBe(true);
});
