let history = { rock: 0, paper: 0, scissors: 0 };
let score = { user: 0, ai: 0, draw: 0 };

const imageMap = {
  rock: "batu.png",
  paper: "kertas.png",
  scissors: "gunting.png"
};

function play(userChoice) {
  // Tampilkan default (batu) dan animasi shake
  showChoice('left-hand', 'rock');
  showChoice('right-hand', 'rock');
  animateHands();

  setTimeout(() => {
    updateHistory(userChoice);
    const aiChoice = predictUserMove();
    const result = determineWinner(userChoice, aiChoice);

    // Update skor
    if (result === "You Win!") score.user++;
    else if (result === "AI Wins!") score.ai++;
    else score.draw++;

    // Tampilkan pilihan final
    showChoice('left-hand', userChoice);
    showChoice('right-hand', aiChoice);

    // Tampilkan hasil
    document.getElementById("user-score").innerText = score.user;
    document.getElementById("ai-score").innerText = score.ai;
    document.getElementById("result").innerText =
      `Kamu memilih ${userChoice}, AI memilih ${aiChoice} → ${result}`;
  }, 600); // Delay setelah shake
}

function showChoice(id, choice) {
  document.getElementById(id).src = imageMap[choice];
}

function animateHands() {
  const left = document.getElementById('left-hand');
  const right = document.getElementById('right-hand');

  left.classList.add('shake-left');
  right.classList.add('shake-right');

  setTimeout(() => {
    left.classList.remove('shake-left');
    right.classList.remove('shake-right');
  }, 500);
}

function updateHistory(choice) {
  history[choice]++;
}

function predictUserMove() {
  const max = Math.max(history.rock, history.paper, history.scissors);
  if (max === 0) return randomChoice();
  if (history.rock === max) return "paper";
  if (history.paper === max) return "scissors";
  return "rock";
}

function randomChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
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
