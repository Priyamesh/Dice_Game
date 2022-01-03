'use strict';

const player0_score = document.querySelector('#score--0');
// console.log(player0_score);
// player0_score.textContent = 0;
const player1_score = document.querySelector('#score--1');
// console.log(player1_score);
// player1_score.textContent = 0;
const btn_roll = document.querySelector('.btn--roll');
// console.log(btn_roll);
const btn_hold = document.querySelector('.btn--hold');
// console.log(btn_hold);
const btn_reset = document.querySelector('.btn--new');
// console.log(btn_reset);

let turn = true;
let player0_currScore = 0;
let player1_currScore = 0;
const p0_curr = document.querySelector('#current--0');
const p1_curr = document.querySelector('#current--1');

let player0_total = 0;
let player1_total = 0;
const p0_total = document.querySelector('#score--0');
const p1_total = document.querySelector('#score--1');

const playerSwitch_hold = function () {
  player0_total += player0_currScore;
  player1_total += player1_currScore;
  p0_total.textContent = player0_total;
  p1_total.textContent = player1_total;
  player0_currScore = 0;
  player1_currScore = 0;
  turn = !turn;
  p0_curr.textContent = 0;
  p1_curr.textContent = 0;
};

const playerSwitch = function () {
  player0_total += 0;
  player1_total += 0;
  p0_total.textContent = player0_total;
  p1_total.textContent = player1_total;
  player0_currScore = 0;
  player1_currScore = 0;
  turn = !turn;
  p0_curr.textContent = 0;
  p1_curr.textContent = 0;
};

const diceRoll = function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  const diceImg = document.querySelector('.dice');

  if (turn) player0_currScore += diceValue;
  else player1_currScore += diceValue;

  if (player0_total + player0_currScore >= 100) {
    p0_total.textContent = `${player0_total + player0_currScore} Won 🍻`;
  }
  if (player1_total + player1_currScore >= 100) {
    p1_total.textContent = `${player1_total + player1_currScore} Won 🍻`;
  }
  switch (diceValue) {
    case 1:
      diceImg.src = 'dice-1.png';
      playerSwitch();
      break;
    case 2:
      diceImg.src = 'dice-2.png';
      break;
    case 3:
      diceImg.src = 'dice-3.png';
      break;
    case 4:
      diceImg.src = 'dice-4.png';
      break;
    case 5:
      diceImg.src = 'dice-5.png';
      break;
    case 6:
      diceImg.src = 'dice-6.png';
      break;
  }
  p0_curr.textContent = player0_currScore;
  p1_curr.textContent = player1_currScore;
};

const resetGame = function () {
  turn = true;
  player0_currScore = 0;
  player1_currScore = 0;
  player0_total = 0;
  player1_total = 0;
  p0_curr.textContent = 0;
  p1_curr.textContent = 0;
  p0_total.textContent = 0;
  p1_total.textContent = 0;
};

btn_roll.addEventListener('click', diceRoll);
btn_hold.addEventListener('click', playerSwitch_hold);
btn_reset.addEventListener('click', resetGame);
