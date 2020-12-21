const chooseWord = categoryArr => {
  const randomNum = Math.floor(Math.random() * categoryArr.length);
  const randomWord = categoryArr[randomNum];
  return randomWord.toLowerCase();
};

export default chooseWord;

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
