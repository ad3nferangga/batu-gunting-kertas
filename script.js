let history = { rock: 0, paper: 0, scissors: 0 };
let score = { user: 0, ai: 0, draw: 0 };

const emojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
};

function play(userChoice) {
  updateHistory(userChoice);
  let aiChoice = predictUserMove();
  let result = determineWinner(userChoice, aiChoice);

  // Update score
  if (result === "You Win!") score.user++;
  else if (result === "AI Wins!") score.ai++;
  else score.draw++;

  // Update choices with animation
  showChoice('user-choice', emojis[userChoice]);
  showChoice('ai-choice', emojis[aiChoice]);

  // Update result text
  document.getElementById("result").innerText =
    `You chose ${userChoice} | AI chose ${aiChoice} → ${result}`;
  document.getElementById("scoreboard").innerText =
    `You: ${score.user} | AI: ${score.ai} | Draw: ${score.draw}`;
}

function updateHistory(choice) {
  history[choice]++;
}

function predictUserMove() {
  let max = Math.max(history.rock, history.paper, history.scissors);
  if (max === 0) return randomChoice();
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

function showChoice(id, emoji) {
  const el = document.getElementById(id);
  el.classList.remove("animate");
  void el.offsetWidth; // trigger reflow to restart animation
  el.innerText = emoji;
  el.classList.add("animate");
}
