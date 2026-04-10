const holes = document.querySelectorAll(".hole");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let score = 0;
let timeLeft = 30;
let isRunning = false;
let spawnTimer = null;
let countdownTimer = null;
let lastHole = null;

function randomHole() {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) return randomHole();
  lastHole = hole;
  return hole;
}

function spawnMole() {
  if (!isRunning) return;
  const hole = randomHole();
  hole.classList.add("up");
  const visibleFor = 700 + Math.random() * 500;
  setTimeout(() => {
    hole.classList.remove("up");
    if (isRunning) {
      spawnTimer = setTimeout(spawnMole, 200 + Math.random() * 400);
    }
  }, visibleFor);
}

// BUG #2 (logic): `score++` runs even when the hole wasn't showing a mole,
// so clicking empty holes still scores.
function whack(event) {
  const hole = event.currentTarget;
  if (hole.classList.contains("up")) {
    hole.classList.remove("up");
  }
  score++;
  scoreEl.textContent = score;
}

function tick() {
  timeLeft--;
  timeEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    endGame();
  }
}

function startGame() {
  if (isRunning) return;
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = "0";
  timeEl.textContent = "30";
  isRunning = true;
  startBtn.disabled = true;
  spawnMole();
  countdownTimer = setInterval(tick, 1000);
}

function endGame() {
  isRunning = false;
  startBtn.disabled = false;
  clearTimeout(spawnTimer);
  clearInterval(countdownTimer);
  holes.forEach((h) => h.classList.remove("up"));
}

function resetGame() {
  endGame();
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = "0";
  timeEl.textContent = "30";
}

holes.forEach((hole) => hole.addEventListener("click", whack));
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
