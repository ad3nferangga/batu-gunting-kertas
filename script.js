let history = { rock: 0, paper: 0, scissors: 0 };

function play(userChoice) {
  updateHistory(userChoice);
  let aiChoice = predictUserMove();
  let result = determineWinner(userChoice, aiChoice);
  document.getElementById("result").innerText =
    `You chose ${userChoice} | AI chose ${aiChoice} → ${result}`;
}

function updateHistory(choice) {
  history[choice]++;
}

function predictUserMove() {
  let max = Math.max(history.rock, history.paper, history.scissors);
  if (max === 0) return randomChoice(); // ronde awal, acak
  if (history.rock === max) return "paper";
  if (history.paper === max) return "scissors";
  return "rock";
}

function randomChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function determineWinner(user, ai) {
  if (user === ai) return "Draw!";
  if (
    (user === "rock" && ai === "scissors") ||
    (user === "paper" && ai === "rock") ||
    (user === "scissors" && ai === "paper")
  ) return "You Win!";
  return "AI Wins!";
}
