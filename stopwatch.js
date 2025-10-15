let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function formatTime(ms) {
  let date = new Date(ms);
  let minutes = String(date.getUTCMinutes()).padStart(2, '0');
  let seconds = String(date.getUTCSeconds()).padStart(2, '0');
  let milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
});

pauseBtn.addEventListener("click", () => {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timerInterval);
});

resetBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
});

updateDisplay(); // Initialize display to 00:00:000
