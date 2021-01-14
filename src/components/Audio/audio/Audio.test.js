import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Audio from "../Audio";

let handleChange = jest.fn()

const renderWithInput = (customOptions = {soundOn: false }, gameWon = null,  ) => {
  return (
    <Audio
    gameWon={gameWon}
    soundOn={customOptions.soundOn}
    setSoundOptions={ handleChange}/>
    )
};

describe("tests Audio file", () => {
  test('sound icon, when sound is OFF option, is present', () => {
    render(renderWithInput())
    screen.getByText("🔇")
  });

  test('checkbox is unchecked, when sound is OFF option', () => {
    const {container} =  render(renderWithInput({soundOn: false}))
    const checkbox = container.querySelector("#sound-on")
    expect(checkbox.checked).toBe(false)
  });

  test('sound icon, when sound is ON option, is present', () => {
    render(renderWithInput({soundOn: true}))
    screen.getByText("🔉")
  });

  test('checkbox is checked, when sound is ON', () => {
    const {container} =  render(renderWithInput({soundOn: true}))
    const checkbox = container.querySelector("#sound-on")
    expect(checkbox.checked).toBe(true)
  });

  test("checkbox event is called when clicked", () => {
    const {container} = render(renderWithInput({soundOn: true}, null, handleChange))
    const checkbox = container.querySelector("#sound-on")
    userEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
  });
})