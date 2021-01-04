import { render, screen } from "@testing-library/react";
import changeBgColorOnWin from "./fns";
import Score from "./Score";

const renderWithInput = (score, gameWon) => {
  return <Score score={score} gameWon={gameWon} />;
};

test("render with initial value of 0 and right bg color", () => {
  render(renderWithInput(0, null));
  screen.getByRole("img", { name: /score/i });
  expect(changeBgColorOnWin(null)).toEqual({ backgroundColor: "#282c34" });
});

test("renders when game ends, looser condition and right bg color", () => {
  render(renderWithInput(0, "no"));
  screen.getByRole("img", { name: /score/i });
  expect(changeBgColorOnWin("no")).toEqual({ backgroundColor: "#282c34" });
});

test("renders when game ends, winner condition and show white bg", () => {
  render(renderWithInput(10, "yes"));
  screen.getByRole("img", { name: /score/i });
  expect(changeBgColorOnWin("yes")).toEqual({ backgroundColor: "white" });
});
