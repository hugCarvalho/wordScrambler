const changeCountdownColor = countdown => {
  if (countdown <= 5) return { color: "#ff3434" };
  else if (countdown <= 15) return { color: "#ffd700" };
  else return null;
};

export default changeCountdownColor;
