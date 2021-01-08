import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../../../reusable/Button";

const mock = jest.fn();
const renderWithInput = () => {
  return (
    <Button onClick={() => mock()} type="submit">
      "Start"
    </Button>
  );
};

test("onClick event is fired", () => {
  render(renderWithInput());
  const btn = screen.getByRole("button", { name: /start/i });
  userEvent.click(btn);
  expect(mock).toHaveBeenCalledTimes(1);
});
