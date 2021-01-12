import onPageChange from "../fns";

test("should have the right style depending on active page", () => {
  expect(onPageChange(2)).toEqual({
    instructions: { transform: "translateX(-100%)" },
    score: { transform: "translateX(-307px)" }, //transform: width instructions text container + margin
    options: { transform: "translateX(-292px)" },
  });

  expect(onPageChange(3)).toEqual({
    instructions: { transform: "translateX(-100%)" },
    score: { transform: "translateX(-200%)" },
    options: { transform: "translateX(-599px)" },
  });
});
