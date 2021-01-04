import { render, screen } from "@testing-library/react";
import GuessesLeft from "./GuessesLeft";
import changeGuessesLeftColor, { renderEmojiFace } from "./fns";

const faces = ["🧐", "😨", "😲", "🤯"];
const renderWithInput = (totalGuessesLeft, guessesLeft) => {
  return (
    <GuessesLeft
      guessesLeft={guessesLeft}
      gameOptions={{ totalGuessesLeft: totalGuessesLeft }}
    />
  );
};

test("renders appropriate icon according to number of guesses left", () => {
  const { rerender } = render(renderWithInput(3, 3));
  const icon = screen.getByRole("img", { name: /guesses left/i });
  expect(icon).toHaveTextContent(faces[0]);

  rerender(renderWithInput(3, 2));
  expect(icon).toHaveTextContent(faces[1]);

  rerender(renderWithInput(3, 1));
  expect(icon).toHaveTextContent(faces[2]);

  rerender(renderWithInput(3, 0));
  expect(icon).toHaveTextContent(faces[3]);
});

//the same as before
// test("renders appropriate icon according to number of guesses left II", () => {
//   expect(renderEmojiFace(3, { totalGuessesLeft: 3 })).toBe("🧐");
//   expect(renderEmojiFace(2, { totalGuessesLeft: 3 })).toBe("😨");
//   expect(renderEmojiFace(1, { totalGuessesLeft: 3 })).toBe("😲");
//   expect(renderEmojiFace(0, { totalGuessesLeft: 3 })).toBe("🤯");
// });

test("color changes according to num guesses left", () => {
  expect(changeGuessesLeftColor(2)).toEqual({ color: "#83d04e" });
  expect(changeGuessesLeftColor(1)).toEqual({ color: "#ffd700" });
  expect(changeGuessesLeftColor(0)).toEqual({ color: "#ff3434" });
});
