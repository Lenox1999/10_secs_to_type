const textToType = [
  'Python',
  'Hacking',
  'JavaScript',
  'TypeScript',
  'Rasenmähen',
  'Schuhe putzen',
];

const startGameBtn = document.querySelector('button');
const inputField = document.querySelector('input');
const showTextField = document.getElementById('show-text-to-type');
const something = document.getElementById('show-if-right');
const countdownField = document.getElementById('countdown');
const showHighScore = document.getElementById('show-highscore');
const resetButton = document.getElementById('reset-button');

const timerTime = 10; // setting the coutdown to 10 secs
