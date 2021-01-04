import { render, screen } from "@testing-library/react";
import SelectDefaultDifficulty from "./SelectDefaultDifficulty";

//TODO: Change
const renderWithInput = (
  defaultVal,
  customOptions = { difficulty: ["easy", "medium", "hard", "all"] }
) => {
  return (
    <SelectDefaultDifficulty
      defaultValue={defaultVal}
      customOptions={customOptions}
      setCustomOptions={() => {}}
    />
  );
};

describe("Defaultdifficulty", () => {
  test("renders select option with 4 options and 'easy' is selected", () => {
    render(renderWithInput("easy"));

    screen.getByRole("combobox", { name: /default difficulty/i });
    const easy = screen.getByRole("option", { name: /easy/i });
    const medium = screen.getByRole("option", { name: /medium/i });
    const hard = screen.getByRole("option", { name: /hard/i });
    const all = screen.getByRole("option", { name: /all/i });
    //let res = Object.values(select); //.forEach(item => console.log(item));
    //res.forEach(item => console.log(item.selected));
    expect(easy.selected).toBeTruthy();
    expect(medium.selected).toBeFalsy();
    expect(hard.selected).toBeFalsy();
    expect(all.selected).toBeFalsy();
  });

  test("renders select option with 4 options and 'medium' is selected", () => {
    render(renderWithInput("medium"));
    screen.getByRole("combobox", { name: /default difficulty/i });

    const easy = screen.getByRole("option", { name: /easy/i });
    const medium = screen.getByRole("option", { name: /medium/i });
    const hard = screen.getByRole("option", { name: /hard/i });
    const all = screen.getByRole("option", { name: /all/i });

    expect(easy.selected).toBeFalsy();
    expect(medium.selected).toBeTruthy();
    expect(hard.selected).toBeFalsy();
    expect(all.selected).toBeFalsy();
  });

  test("renders select option with 4 options and 'hard' is selected", () => {
    render(renderWithInput("hard"));

    screen.getByRole("combobox", { name: /default difficulty/i });
    const easy = screen.getByRole("option", { name: /easy/i });
    const medium = screen.getByRole("option", { name: /medium/i });
    const hard = screen.getByRole("option", { name: /hard/i });
    const all = screen.getByRole("option", { name: /all/i });

    expect(easy.selected).toBeFalsy();
    expect(medium.selected).toBeFalsy();
    expect(hard.selected).toBeTruthy();
    expect(all.selected).toBeFalsy();
  });
  test("renders select option with 4 options and 'all' is selected", () => {
    render(renderWithInput("all"));

    screen.getByRole("combobox", { name: /default difficulty/i });
    const easy = screen.getByRole("option", { name: /easy/i });
    const medium = screen.getByRole("option", { name: /medium/i });
    const hard = screen.getByRole("option", { name: /hard/i });
    const all = screen.getByRole("option", { name: /all/i });

    expect(easy.selected).toBeFalsy();
    expect(medium.selected).toBeFalsy();
    expect(hard.selected).toBeFalsy();
    expect(all.selected).toBeTruthy();
  });
});
