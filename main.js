window.addEventListener("load", init);

let time = 5;
let score = 0;
let isPlaying;
let highScore = 0;

const word = document.querySelector("#word");
const input = document.querySelector("#input");
const message = document.querySelector("#message");
const seconds = document.querySelector("#secs");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#btn");
const circle = document.querySelector('#circle');

const words = [
  "return;",
  "includes()",
  "some()",
  "every()",
  "class",
  "forEach()",
  "let;",
  "console.log()",
  "filter()",
  "map()",
  "reduce()",
  "concat()",
  ".filter()",
  ".innerHTML",
  "collection-item",
  "parentElement",
  "firstChild",
  "else {}",
  "(){}",
  ".join()",
  "numbers.length",
  "indexof()",
  "#include",
  "'helloworld'",
  "obj:1",
  "call()",
  "function()",
  "not_easy",
  "document.getElementById()",
  "if(){}",
  "WeakMap",
  "typeOf()",
  "JSON",
  "parseInt()",
  "isNaN()",
  "Promise",
  "globalThis",
  "Map",
  "Object",
  "!==",
  "Generator",
  "Boolean",
  ".push()",
  ".pop()",
  ".splice()",
  'name: "Zach";',
  "person.name",
  "more-dashes",
  "new Array()",
  "addEventListener()",
  "new Object",
  "functionName",
  "zachHarrison",
  "snoopy.bark()",
  "prototype",
  "object.prop",
  "camelCase",
  "ASCII",
  "array[]",
  "printf('')",
  "^regex$",
];

function getRandomWord() {
  let ranWord = Math.floor(Math.random() * words.length);
  return words[ranWord];
}

function randomizeWord() {
  let currentWord = word.innerHTML;
  let randomWord = getRandomWord();
  while (randomWord == currentWord) {
    randomWord = getRandomWord();
  }
  word.innerHTML = randomWord;
}

function init() {
  randomizeWord();
  input.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function countdown() {
  if (time > 0 && isPlaying === true) {
    time--;
    seconds.innerHTML = time;
  } else {
    if (time === 0) {
      isPlaying = false;
    }
  }
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    setHighScore();
    message.innerHTML = "Game Over!";
    score = 0;
    input.disabled = true;
    showModal();
  }
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    randomizeWord();
    input.value = "";
    score++;
    scoreDisplay.innerHTML = score;
  }
}

function setHighScore() {
  if (score > highScore) {
    highScore = score;
    highScoreDisplay.innerHTML = highScore;
  }
  score = 0;
  scoreDisplay.innerHTML = score;
}

function matchWords() {
  if (input.value === word.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    return false;
  }
}

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

modalBtn.addEventListener("click", function () {
  newGame();
});

document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    newGame();
  }
});

function newGame() {
  time = 6;
  input.value = "";
  input.disabled = false;
  input.focus();
  hideModal();
}

