const uppercaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbolsArr = ["@", "#", "$", ".", "!"];

const groupArr = {
  upppercaseArr: null,
  lowercaseArr: null,
  numbersArr: null,
  symbolsArr: null,
};

export const handleCheck = (e) => {
  if (e.target.name === "uppercase") {
    if (e.target.checked === true) {
      groupArr.upppercaseArr = uppercaseArr;
    } else {
      groupArr.upppercaseArr = null;
    }
  } else if (e.target.name === "lowercase") {
    if (e.target.checked === true) {
      groupArr.lowercaseArr = lowercaseArr;
    } else {
      groupArr.lowercaseArr = null;
    }
  } else if (e.target.name === "numbers") {
    if (e.target.checked === true) {
      groupArr.numbersArr = numbersArr;
    } else {
      groupArr.numbersArr = null;
    }
  } else if (e.target.name === "symbols") {
    if (e.target.checked === true) {
      groupArr.symbolsArr = symbolsArr;
    } else {
      groupArr.symbolsArr = null;
    }
  }
//   console.log(groupArr);
};

let passLength = null

export const handlePasswordLength = (e) => {
    passLength = e.target.value
}

export const handleClick = () => {
  const randomArray = [];
  if (groupArr.upppercaseArr !== null) {
    randomArray.push(...groupArr.upppercaseArr);
  }
  if(groupArr.lowercaseArr !== null){
    randomArray.push(...groupArr.lowercaseArr);
  }
  if(groupArr.numbersArr !== null){
    randomArray.push(...groupArr.numbersArr);
  }
  if(groupArr.symbolsArr !== null){
    randomArray.push(...groupArr.symbolsArr);
  }
   randomArray.sort(() => {
    return Math.random() - 0.5
  })
  return randomArray.join('').slice(0, passLength)
};

// export default password