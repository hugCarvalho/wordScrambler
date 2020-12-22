//TODO: Add difficulty = "all" when app is done
const filterWordAccordingDifficulty = (array, difficulty) => {
  const filteredArray = array.filter(word => word.length > 2);

  //better perf by not having to filter the array bellow
  if (difficulty === "all") {
    return filteredArray;
  } else {
    return filteredArray.filter(word => {
      if (difficulty === "easy") return word.length >= 3 && word.length <= 5;
      if (difficulty === "medium") return word.length >= 6 && word.length <= 8;
      if (difficulty === "hard") return word.length >= 9;
      throw new Error("Wrong difficulty setting. Check your typing");
    });
  }
};

const chooseWord = (categoryArr, difficulty) => {
  const filteredArr = filterWordAccordingDifficulty(categoryArr, difficulty);
  const randomWord = filteredArr[Math.floor(Math.random() * filteredArr.length)];
  return randomWord.toLowerCase();
};

export const scrambleWord = word => {
  //console.log("word is", word);
  let letters = [...word];
  let res = [];
  let i = 0;
  do {
    let chosen = letters[Math.floor(Math.random() * letters.length)];
    res.push(chosen);
    letters.splice(letters.indexOf(chosen), 1);
    i++;
  } while (i < word.length);
  let scrambledWord = res.join("");
  //console.log("Scrambled word is", word);
  return scrambledWord === word ? scrambleWord(word) : scrambledWord;
};

export default chooseWord;
