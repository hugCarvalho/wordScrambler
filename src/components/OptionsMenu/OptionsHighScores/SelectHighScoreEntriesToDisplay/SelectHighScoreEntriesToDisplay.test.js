import { render, screen } from "@testing-library/react";
import SelectHighScoreEntriesToDisplay from "./SelectHighScoreEntriesToDisplay";

const optionsCustom = {
  showHighScore: true,
  highScoreEntries: [10, 20, 30, 40, 50],
  defaultHighScoreEntries: 10,
};

const toggle = jest.fn();
const renderWithInput = defaultVal => {
  return (
    <SelectHighScoreEntriesToDisplay
      customOptions={optionsCustom}
      setCustomOptions={toggle}
      defaultValue={defaultVal}
    />
  );
};

test("render select element with 5 options and default value 10", () => {
  render(renderWithInput(10));

  screen.getByRole("combobox", { name: /high score/i });
  const ten = screen.getByRole("option", { name: /10/i });
  const twenty = screen.getByRole("option", { name: /20/i });
  const thirty = screen.getByRole("option", { name: /30/i });
  const forty = screen.getByRole("option", { name: /40/i });
  const fifty = screen.getByRole("option", { name: /50/i });

  expect(ten).toHaveAttribute("selected");
  expect(twenty).not.toHaveAttribute("selected");
  expect(thirty).not.toHaveAttribute("selected");
  expect(forty).not.toHaveAttribute("selected");
  expect(fifty).not.toHaveAttribute("selected");
});

test("render select element with 5 options and default value 20", () => {
  render(renderWithInput(20));

  const ten = screen.getByRole("option", { name: /10/i });
  const twenty = screen.getByRole("option", { name: /20/i });
  const thirty = screen.getByRole("option", { name: /30/i });
  const forty = screen.getByRole("option", { name: /40/i });
  const fifty = screen.getByRole("option", { name: /50/i });

  expect(ten).not.toHaveAttribute("selected");
  expect(twenty).toHaveAttribute("selected");
  expect(thirty).not.toHaveAttribute("selected");
  expect(forty).not.toHaveAttribute("selected");
  expect(fifty).not.toHaveAttribute("selected");
});
