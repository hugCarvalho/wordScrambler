import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import App from "./App";
import UserInput from "./UserInput";
//import Button from "./Button/Button";

const renderWithInput = (gameStatus = "playing", gameWon = "null", guessesLeft = 3) => {
  return (
    <UserInput
      gameStatus={gameStatus}
      gameWon={gameWon}
      //setGuessesLeft={() => {}}
      countdown={30}
      options={{}}
      showWrongGuessIndicator={false}
      guessesLeft={guessesLeft}
      onSubmitHandler={() => {}}
    />
  );
};

describe("user input section", () => {
  test("renders main button 'start' with right text content", () => {
    //main button
    render(renderWithInput("onLoad"));
    screen.getByText(/start/i);
    cleanup();

    render(renderWithInput("setup"));
    screen.getByText(/guess/i);
    cleanup();

    render(renderWithInput("scramblingWord"));
    screen.getByText(/guess/i);
    cleanup();

    render(renderWithInput("playing"));
    screen.getByText(/guess/i);
    cleanup();

    render(renderWithInput("ended"));
    screen.getByText(/play again/i);
  });

  test("renders secondary button", () => {
    render(renderWithInput("playing"));
    screen.getByRole("button", { name: /give up/i });
  });

  test("renders input in its disabled states", () => {
    render(renderWithInput("onLoad"));
    const input = screen.getByRole("textbox", { name: /user guess/i });
    expect(input).toHaveAttribute("disabled");
    cleanup();

    render(renderWithInput("setup"));
    expect(input).toHaveAttribute("disabled");
    cleanup();

    render(renderWithInput("scramblingWord"));
    expect(input).toHaveAttribute("disabled");
    cleanup();

    render(renderWithInput("ended"));
    expect(input).toHaveAttribute("disabled");
    cleanup();
  });

  test("renders input in its non disabled states", () => {
    render(renderWithInput("playing"));
    const input = screen.getByRole("textbox", { name: /user guess/i });
    expect(input).not.toHaveAttribute("disabled");
  });

  test("typing works", () => {
    const text = "piano";
    render(renderWithInput());
    const input = screen.getByRole("textbox", { name: /user guess/i });
    userEvent.type(input, text);
    expect(input.value).toBe(text);
  });
});
