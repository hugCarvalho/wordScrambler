import { cleanup, render, screen } from "@testing-library/react";
import Word from "./Word";

const renderWithInput = (gameStatus = "playing", scrambledWord = "test") => {
  return <Word gameStatus={gameStatus} scrambledWord={scrambledWord} />;
};

test("should render question mark with certain gameStatus", () => {
  render(renderWithInput("onLoad"));
  const questionEmoji = screen.getByText("❓");
  screen.getByLabelText("word to guess");
  cleanup();

  render(renderWithInput("scramblingWord"));
  screen.getByLabelText("word to guess");
  screen.getByText("❓");
  cleanup();

  render(renderWithInput("playing"));
  screen.getByLabelText("word to guess");
  expect(questionEmoji).not.toBeInTheDocument();
  cleanup();

  render(renderWithInput("ended"));
  screen.getByLabelText("word to guess");
  expect(questionEmoji).not.toBeInTheDocument();
});

test("should render a word", () => {
  render(renderWithInput("playing"));
  screen.getByLabelText("word to guess");
  screen.getByText("test");
  expect(screen.getByLabelText(/word to guess/i).textContent).not.toBe("❓");
});
