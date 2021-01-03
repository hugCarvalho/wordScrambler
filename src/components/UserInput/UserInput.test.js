import { cleanup, render, screen } from "@testing-library/react";
//import App from "./App";
import UserInput from "./UserInput";
//import Button from "./Button/Button";

const renderWithInput = (gameStatus = "playing", guessesLeft = 3) => {
  return (
    <UserInput
      onSubmitHandler={() => {}}
      gameStatus={gameStatus}
      guessesLeft={guessesLeft}
      gameWon={null}
      //setGuessesLeft={() => {}}
      countdown={30}
      options={{}}
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
    //secondary button
    render(renderWithInput("playing"));
    screen.getByRole("button", { name: /give up/i });
  });

  test("renders input", () => {
    render(renderWithInput());
    screen.getByRole("textbox", { name: /user guess/i });
  });
});
