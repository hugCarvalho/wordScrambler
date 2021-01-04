import { render, screen } from "@testing-library/react";
import Countdown from "./Countdown";
import changeCountdownColor from "./fns";

const renderWithInput = countdown => {
  return <Countdown countdown={countdown} />;
};

test("should render icon with total time", () => {
  render(renderWithInput(20));
  screen.getByRole("img", { name: /countdown/i });
  screen.getByText(/20/i);
});

test("should render right text color", () => {
  expect(changeCountdownColor(15)).toEqual({ color: "#ffd700" });
  expect(changeCountdownColor(6)).toEqual({ color: "#ffd700" });
  expect(changeCountdownColor(16)).toBeNull();
  expect(changeCountdownColor(20)).toBeNull();
  expect(changeCountdownColor(5)).toEqual({ color: "#ff3434" });
});
