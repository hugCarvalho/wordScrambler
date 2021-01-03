import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShowHighScore from "./ShowHighScore";

const toggle = jest.fn();
const renderWithInput = (customOptions = { showHighScore: true }) => {
  return <ShowHighScore customOptions={customOptions} toggleShowHighScore={toggle} />;
};
test("should ", () => {
  //const handleChange = jest.fn()
  const { rerender } = render(renderWithInput({ showHighScore: true }));
  const checkbox = screen.getByRole("checkbox");

  expect(checkbox.checked).toBe(true);
  userEvent.click(checkbox);
  expect(toggle).toHaveBeenCalledTimes(1);

  rerender(renderWithInput({ showHighScore: false }));
  expect(checkbox.checked).toBe(false);
  userEvent.click(checkbox);
  expect(toggle).toHaveBeenCalledTimes(2);

  rerender(renderWithInput({ showHighScore: true }));
  expect(checkbox.checked).toBe(true);
});
