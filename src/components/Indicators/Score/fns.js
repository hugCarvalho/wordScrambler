const changeBgColorOnWin = gameWon =>
  gameWon === "yes" ? { backgroundColor: "white" } : { backgroundColor: "#282c34" };
export default changeBgColorOnWin;
