let theWords = [
  "Hello",
  "mohamed",
  "anwer",
  "ftooh",
  "Code",
  "ali",
  "Javascript",
  "Town",
  "barcalona",
  "paris",
  "Youtube",
  "facebook",
  "Twitter",
  "whatsaap",
  "instagram",
  "Internet",
  "Python",
  "Css",
  "Destructuring",
  "liverpool",
  "Styling",
  "Cascade",
  "AC Milan",
  "Coding",
  "Funny",
  "Working",
  "jop",
  "Task",
  "Runner",
  "Role",
  "Test",
  "Rust",
  "Play",
  "ahmed",
  "Hi",
  "inter",
  "day",
  "Today",
  "yastarday",
  "Facebook",
  "Google",
  "Phone",
  "Calculator",
  "Beautiful",
  "Difficult",
  "Minute",
  "ran",
  "Goodbye",
  "Water",
  "GOOD",
];
const Easy = 30;
const Meduim = 20;
const Hard = 10;

let startButton = document.querySelector("#start");
let theWord = document.querySelector("#words");
let theInput = document.querySelector("#input");
let timeLeft = document.querySelector("#sec");
let scoreGot = document.querySelector("#got");
let scoreTotal = document.querySelector("#total");
let gpaScore = document.querySelector("#gpa");
let levelEasy = document.querySelector("#easy");
let levelMeduim = document.querySelector("#meduim");
let levelHard = document.querySelector("#hard");
let againButton = document.querySelector("#again");
let diffLevels = document.querySelectorAll("button");

timeLeft.innerHTML = Meduim;
scoreTotal.innerHTML = theWords.length;
againButton.disabled = "none";
// To Start The Game
startButton.onclick = function () {
  this.remove();
  theInput.focus();
  theOpreation();
  startPlay();
  addEventListener("input", setWord);
  levelEasy.disabled = false;
  levelMeduim.disabled = false;
  levelHard.disabled = false;
};
// To You Try Again
againButton.onclick = function () {
  theInput.focus();
  theOpreation();
  startPlay();
  addEventListener("input", setWord);
  theInput.disabled = false;
  againButton.disabled = "none";
  timeLeft.innerHTML = Meduim;
  scoreGot.innerHTML = 0;
  scoreGot.innerHTML = window.localStorage.getItem(scoreGot);
};
// Get Random Word
function theOpreation() {
  let randWord = theWords[Math.floor(Math.random() * theWords.length)];
  let wordIndex = theWords.indexOf(randWord);
  // Delete The Word In The Array
  theWords.splice(wordIndex, 1);
  theWord.innerHTML = randWord;
}
// Set The Time
function startPlay() {
  let start = setInterval(() => {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML === "0") {
      clearInterval(start);
      theInput.disabled = "none";
      againButton.disabled = false;
    }
  }, 1000);
}
// Set The Cases Of Word
function setWord() {
  if (theInput.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
    theInput.value = "";
    scoreGot.innerHTML++;
    if (theWords.length > 0) theOpreation();
    else {
      theInput.disabled = "none";
      gpaScore.innerHTML = "Very Good";
    }
  }
}
// Local Storage To Save The Data In The Browser
diffLevels.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    window.localStorage.setItem("checkValue", e.currentTarget.value);
    window.localStorage.setItem("scoreValue", e.currentTarget.scoreGot);
  });
});

if (window.localStorage.getItem("checkValue")) {
  if (window.localStorage.getItem("checkValue") === "easy") {
    timeLeft.innerHTML = Easy;
    scoreGot.innerHTML = e.currentTarget.scoreGot;
  } else if (window.localStorage.getItem("checkValue") === "meduim") {
    timeLeft.innerHTML = Meduim;
    scoreGot.innerHTML = e.currentTarget.scoreGot;
  } else if (window.localStorage.getItem("checkValue") === "hard") {
    timeLeft.innerHTML = Hard;
    scoreGot.innerHTML = e.currentTarget.scoreGot;
  }
} else {
  timeLeft.innerHTML = Meduim;
  scoreGot.innerHTML = e.currentTarget.scoreGot;
}