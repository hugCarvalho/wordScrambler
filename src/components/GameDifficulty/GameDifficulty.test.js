import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameDifficulty from "./GameDifficulty";

const renderWithInput = (level = "easy", gameStatus = "playing") => {
  return (
    <GameDifficulty difficulty={level} setDifficulty={() => {}} gameStatus={gameStatus} />
  );
};

describe("testing", () => {
  //render(renderWithIput());

  test("should render 4 levels of difficulty", () => {
    render(
      <GameDifficulty difficulty={"easy"} setDifficulty={() => {}} gameStatus="setup" />
    );
    const levels = screen.getAllByRole("radio");
    expect(levels).toHaveLength(4);

    screen.getByText(/easy/i);
    screen.getByText(/medium/i);
    screen.getByText(/hard/i);
    screen.getByText(/all/i);

    const easy = screen.getByRole("radio", { name: /easy/i });
    const medium = screen.getByRole("radio", { name: /medium/i });
    const hard = screen.getByRole("radio", { name: /hard/i });
    const all = screen.getByRole("radio", { name: /all/i });

    //console.log(btn);
    expect(easy).toHaveAttribute("checked");
    expect(medium).not.toHaveAttribute("checked");
    expect(hard).not.toHaveAttribute("checked");
    expect(all).not.toHaveAttribute("checked");
  });

  test("only medium should be checked", () => {
    render(renderWithInput("medium"));
    const easy = screen.getByRole("radio", { name: /easy/i });
    const medium = screen.getByRole("radio", { name: /medium/i });
    const hard = screen.getByRole("radio", { name: /hard/i });
    const all = screen.getByRole("radio", { name: /all/i });

    expect(easy).not.toHaveAttribute("checked");
    expect(medium).toHaveAttribute("checked");
    expect(hard).not.toHaveAttribute("checked");
    expect(all).not.toHaveAttribute("checked");
  });

  test("only hard should be checked", () => {
    render(renderWithInput("hard"));
    const easy = screen.getByRole("radio", { name: /easy/i });
    const medium = screen.getByRole("radio", { name: /medium/i });
    const hard = screen.getByRole("radio", { name: /hard/i });
    const all = screen.getByRole("radio", { name: /all/i });

    expect(easy).not.toHaveAttribute("checked");
    expect(medium).not.toHaveAttribute("checked");
    expect(hard).toHaveAttribute("checked");
    expect(all).not.toHaveAttribute("checked");
  });

  test("only all should be checked", () => {
    render(renderWithInput("all"));
    const easy = screen.getByRole("radio", { name: /easy/i });
    const medium = screen.getByRole("radio", { name: /medium/i });
    const hard = screen.getByRole("radio", { name: /hard/i });
    const all = screen.getByRole("radio", { name: /all/i });

    expect(easy).not.toHaveAttribute("checked");
    expect(medium).not.toHaveAttribute("checked");
    expect(hard).not.toHaveAttribute("checked");
    expect(all).toHaveAttribute("checked");
  });

  test("should be disabled if game status is 'playing'", () => {
    render(renderWithInput(undefined, "playing"));
    const all = screen.getAllByRole("radio");
    all.forEach(btn => expect(btn).toBeDisabled());
  });

  test("should be enabled if game status is NOT 'playing'", () => {
    render(renderWithInput(undefined, "setup"));
    let all = screen.getAllByRole("radio");
    all.forEach(btn => expect(btn).not.toBeDisabled());
    cleanup();

    render(renderWithInput("easy", "ended"));
    all = screen.getAllByRole("radio");
    all.forEach(btn => expect(btn).not.toBeDisabled());
    cleanup();

    render(renderWithInput("easy", "scramblingWord"));
    all = screen.getAllByRole("radio");
    all.forEach(btn => expect(btn).not.toBeDisabled());
  });
});
