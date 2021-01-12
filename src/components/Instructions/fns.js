const onPageChange = activePage => {
  if (activePage === 2)
    return {
      instructions: { transform: "translateX(-100%)" },
      score: { transform: "translateX(-307px)" }, //transform: width instructions text container + margin
      options: { transform: "translateX(-292px)" },
    };
  if (activePage === 3)
    return {
      instructions: { transform: "translateX(-100%)" },
      score: { transform: "translateX(-200%)" },
      options: { transform: "translateX(-599px)" },
    };
  return { instructions: {}, score: {} };
};

export default onPageChange;
