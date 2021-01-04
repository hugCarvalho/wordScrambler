import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("header is present", () => {
  render(<Header></Header>);
  const h1 = screen.getByRole("heading", { name: /word scrambler/i });
});
