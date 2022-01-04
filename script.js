'use strict';

//elements for altering HTML
const player0_score = document.querySelector('#score--0');
const player1_score = document.querySelector('#score--1');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const btn_reset = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');
const p0_curr = document.querySelector('#current--0');
const p1_curr = document.querySelector('#current--1');
const p0_total = document.querySelector('#score--0');
const p1_total = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//intial setup
p0_curr.textContent = 0;
p1_curr.textContent = 0;
let turn = true;
let player0_currScore = 0;
let player1_currScore = 0;
let player0_total = 0;
let player1_total = 0;
let playing = true;

//resetting the game
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
  player0.classList.add('player--active');
  playing = true;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

//switching players in diffrent scenario
const playerSwitch = function () {
  p0_total.textContent = player0_total;
  p1_total.textContent = player1_total;
  player0_currScore = 0;
  player1_currScore = 0;
  turn = !turn;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  p0_curr.textContent = 0;
  p1_curr.textContent = 0;
};
const playerSwitch_hold = function () {
  if (playing) {
    player0_total += player0_currScore;
    player1_total += player1_currScore;
    diceImg.classList.add('hidden');
    playerSwitch();
  }
};
const playerSwitch_force = function () {
  player0_total += 0;
  player1_total += 0;
  playerSwitch();
};

//rolling the dice
const diceRoll = function () {
  if (playing) {
    diceImg.classList.remove('hidden');
    let diceValue = Math.trunc(Math.random() * 6) + 1;

    if (turn) player0_currScore += diceValue;
    else player1_currScore += diceValue;

    //winning situation
    if (player0_total + player0_currScore >= 100) {
      p0_total.textContent = `${player0_total + player0_currScore} Won 🍻`;
      player0.classList.add('player--winner');
      player0.classList.remove('player--active');
      playing = false;
      diceImg.classList.add('hidden');
    }
    if (player1_total + player1_currScore >= 100) {
      p1_total.textContent = `${player1_total + player1_currScore} Won 🍻`;
      player1.classList.add('player--winner');
      player1.classList.remove('player--active');
      playing = false;
      diceImg.classList.add('hidden');
    }

    //dice
    switch (diceValue) {
      case 1:
        diceImg.src = 'dice-1.png';
        playerSwitch_force();
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
  }
};

//buttons operation
btn_roll.addEventListener('click', diceRoll);
btn_hold.addEventListener('click', playerSwitch_hold);
btn_reset.addEventListener('click', resetGame);
