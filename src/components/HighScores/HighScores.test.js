import { render, screen } from "@testing-library/react";
import HighScores from "./HighScores";

const initScores = {
  easy: [],
  medium: [],
  hard: [],
  all: [],
};


const renderWithInput = (difficulty = "easy",   customOptions = {
  showHighScore : true,
  defaultHighScoreEntries: 10,
  }, 
  scoresObj = initScores) => {
  return (
    <HighScores
    updatedAllScores={scoresObj}
    difficulty={difficulty}
    customOptions={customOptions.showHighScore}
    numEntries={customOptions.defaultHighScoreEntries}
  />
    )
};

describe("HighScore", () => {
  test('top 10 easy - should render initial table with 10 entries', () => {
    const {container} = render(renderWithInput())
    screen.getByText(/top 10/i)
    screen.getByText(/easy/i)
    expect(screen.queryByText(/top 20/i)).toBeNull()
    expect(screen.queryByText(/top 30/i)).toBeNull()
    expect(screen.queryByText(/top 40/i)).toBeNull()
    expect(screen.queryByText(/top 50/i)).toBeNull()
    expect(screen.queryByText(/medium/i)).toBeNull()
    expect(screen.queryByText(/hard/i)).toBeNull()
    expect(screen.queryByText(/all/i)).toBeNull()
    
    const scoreRows = container.querySelectorAll(".score")
    expect(scoreRows).toHaveLength(10) 
    scoreRows.forEach((item, i) => {
      expect(item.textContent).toBe("-")
    })

    const rankRows = container.querySelectorAll(".rank")
    expect(rankRows).toHaveLength(10) 
    rankRows.forEach((item, i) => {
      expect(item.textContent).toBe((i + 1) + ".")
    })
  })

  test('top 30 medium  - should render initial table with 30 entries', () => {
    const {container} = render(renderWithInput("medium", {
      showHighScore : true,
      defaultHighScoreEntries: 30,
      difficulty: "medium"
      }))
    screen.getByText(/top 30/i)
    screen.getByText(/medium/i)
    expect(screen.queryByText(/top 20/i)).toBeNull()
    expect(screen.queryByText(/top 10/i)).toBeNull()
    expect(screen.queryByText(/top 40/i)).toBeNull()
    expect(screen.queryByText(/top 50/i)).toBeNull()
    expect(screen.queryByText(/easy/i)).toBeNull()
    expect(screen.queryByText(/hard/i)).toBeNull()
    expect(screen.queryByText(/all/i)).toBeNull()
    
    const scoreRows = container.querySelectorAll(".score")
    expect(scoreRows).toHaveLength(30) 
    scoreRows.forEach((item, i) => {
      expect(item.textContent).toBe("-")
    })

    const rankRows = container.querySelectorAll(".rank")
    expect(rankRows).toHaveLength(30) 
    rankRows.forEach((item, i) => {
      expect(item.textContent).toBe((i + 1) + ".")
    })
  })

})