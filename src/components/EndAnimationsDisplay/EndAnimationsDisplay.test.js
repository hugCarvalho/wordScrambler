import React from "react";
import { render, screen } from "@testing-library/react";
import EndAnimationsDisplay from "./EndAnimationsDisplay";

const renderWithInput = (showInstructions = true, gameWon = null) => {
  return (
    <EndAnimationsDisplay showInstructions={showInstructions} gameWon={gameWon} />
  );
};

test("should not render section", ()=> {
  render(renderWithInput())
  
  const endAnimationSection = document.querySelector(".EndAnimationsDisplay")
  expect(endAnimationSection).toBeInTheDocument()
  expect(endAnimationSection).not.toHaveClass("showToken")
})

test("should render section and not have whiteBackground", ()=> {
  render(renderWithInput(false, null))
  
  const endAnimationSection = document.querySelector(".EndAnimationsDisplay")
  expect(endAnimationSection).toBeInTheDocument()
  expect(endAnimationSection).toHaveClass("showToken")
  expect(endAnimationSection).not.toHaveStyle("background-color: white")
})

test("should render section with white background when winning", ()=> {
  render(renderWithInput(false, "yes"))
  
  const endAnimationSection = document.querySelector(".EndAnimationsDisplay")
  expect(endAnimationSection).toBeInTheDocument()
  expect(endAnimationSection).toHaveClass("showToken")
  expect(endAnimationSection).toHaveStyle("background-color: white")
})

test("should render section with white background when losing", ()=> {
  render(renderWithInput(false, "no"))
  
  const endAnimationSection = document.querySelector(".EndAnimationsDisplay")
  expect(endAnimationSection).toBeInTheDocument()
  expect(endAnimationSection).toHaveClass("showToken")
  expect(endAnimationSection).toHaveStyle("background-color: white")
})

test("should render only loser icon by losing", ()=> {
  render(renderWithInput(false, "no"))
  const iconLoser = screen.getByRole("img", {name: /lost sad face/i})
  const iconMedal = screen.getByRole("img", {name: /medal/i})
  const iconClaps = screen.getByRole("img", {name: /hands/i})
  const iconTrophy = screen.getByRole("img", {name: /trophy/i})
  const arr = [iconTrophy, iconMedal, iconClaps]
 
  expect(iconLoser).toHaveClass("activate-loser");
  arr.forEach(item => {
    expect(item).toHaveClass("false")
  })
})

test("should render only one winning icon by winning and no losing icon", ()=> {
  render(renderWithInput(false, "yes"))

  const iconLoser = screen.getByRole("img", {name: /lost sad face/i})
  const iconMedal = screen.getByRole("img", {name: /medal/i})
  const iconClaps = screen.getByRole("img", {name: /hands/i})
  const iconTrophy = screen.getByRole("img", {name: /trophy/i})
  const arr = [iconTrophy, iconMedal, iconClaps]

  expect(iconLoser).not.toContain("activate-loser");
  expect(arr.filter(item => item.classList.contains("false"))).toHaveLength(2)
})
