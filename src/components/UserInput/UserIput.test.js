import { cleanup, render, screen } from "@testing-library/react";
//import App from "./App";
import UserInput from "./UserInput";
//import Button from "./Button/Button";

const renderWithIput = (gameStatus = "playing", guessesLeft = 3) => {
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
    render(renderWithIput("onLoad"));
    screen.getByText(/start/i);
    cleanup();
    render(renderWithIput("setup"));
    screen.getByText(/guess/i);
    cleanup();
    render(renderWithIput("scramblingWord"));
    screen.getByText(/guess/i);
    cleanup();
    render(renderWithIput("playing"));
    screen.getByText(/guess/i);
    cleanup();
    render(renderWithIput("ended"));
    screen.getByText(/play again/i);
  });

  test("renders secondary button", () => {
    //secondary button
    render(renderWithIput("playing"));
    screen.getByRole("button", { name: /give up/i });
  });

  test("renders input", () => {
    render(renderWithIput());
    screen.getByRole("textbox", { name: /user guess/i });
  });
});
