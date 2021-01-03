import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GiveUpBtn from "./GiveUpBtn";

const mockSetGuessesLeft = jest.fn();
const renderWithInput = (
  countdown = 20,
  gameStatus = "playing",
  guessesLeft = 3,
  options = { countdown: 20 }
) => {
  return (
    <GiveUpBtn
      countdown={countdown}
      gameStatus={gameStatus}
      guessesLeft={guessesLeft}
      setGuessesLeft={mockSetGuessesLeft}
      options={options}
    />
  );
};

test("btn should be disbled ", () => {
  render(renderWithInput());
  const btn = screen.getByRole("button", { name: /give up/i });
  expect(btn).toHaveAttribute("disabled");
  //screen.debug();
});

test("btn should be active ", () => {
  render(renderWithInput(15));
  const btn = screen.getByRole("button", { name: /give up/i });
  expect(btn).not.toHaveAttribute("disabled");
  //screen.debug();
});

test("click event will fire onclick", () => {
  render(renderWithInput(15));
  const btn = screen.getByRole("button", { name: /give up/i });
  userEvent.click(btn);
  expect(mockSetGuessesLeft).toHaveBeenCalledTimes(1);

  //screen.debug();
});
