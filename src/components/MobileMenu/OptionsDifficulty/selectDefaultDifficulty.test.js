import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectDefaultDifficulty from "./selectDefaultDifficulty";

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

test("render  ", () => {
  const { rerender } = render(renderWithInput("easy"));

  const select = screen.getByRole("combobox", { name: /default difficulty/i });
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

test("render  ", () => {
  const { rerender } = render(renderWithInput("medium"));

  const select = screen.getByRole("combobox", { name: /default difficulty/i });
  const easy = screen.getByRole("option", { name: /easy/i });
  const medium = screen.getByRole("option", { name: /medium/i });
  const hard = screen.getByRole("option", { name: /hard/i });
  const all = screen.getByRole("option", { name: /all/i });
  //let res = Object.values(select); //.forEach(item => console.log(item));
  //res.forEach(item => console.log(item.selected));
  expect(easy.selected).toBeFalsy();
  expect(medium.selected).toBeTruthy();
  expect(hard.selected).toBeFalsy();
  expect(all.selected).toBeFalsy();
  cleanup();
});
test("render  ", () => {
  const { rerender } = render(renderWithInput("hard"));

  const select = screen.getByRole("combobox", { name: /default difficulty/i });
  const easy = screen.getByRole("option", { name: /easy/i });
  const medium = screen.getByRole("option", { name: /medium/i });
  const hard = screen.getByRole("option", { name: /hard/i });
  const all = screen.getByRole("option", { name: /all/i });
  //let res = Object.values(select); //.forEach(item => console.log(item));
  //res.forEach(item => console.log(item.selected));
  expect(easy.selected).toBeFalsy();
  expect(medium.selected).toBeFalsy();
  expect(hard.selected).toBeTruthy();
  expect(all.selected).toBeFalsy();
});
test("render  ", () => {
  const { rerender } = render(renderWithInput("all"));

  const select = screen.getByRole("combobox", { name: /default difficulty/i });
  const easy = screen.getByRole("option", { name: /easy/i });
  const medium = screen.getByRole("option", { name: /medium/i });
  const hard = screen.getByRole("option", { name: /hard/i });
  const all = screen.getByRole("option", { name: /all/i });

  expect(easy.selected).toBeFalsy();
  expect(medium.selected).toBeFalsy();
  expect(hard.selected).toBeFalsy();
  expect(all.selected).toBeTruthy();
});
