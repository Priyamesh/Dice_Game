'use strict';

const player0_score = document.querySelector('#score--0');
// console.log(player0_score);
// player0_score.textContent = 0;

const player1_score = document.querySelector('#score--1');
// console.log(player1_score);
// player1_score.textContent = 0;

const btn_roll = document.querySelector('.btn--roll');
console.log(btn_roll);

const diceRoll = function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  //   console.log(diceValue);
  const diceImg = document.querySelector('.dice');
  //   console.log(diceImg);

  switch (diceValue) {
    case 1:
      diceImg.src = 'dice-1.png';
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
};

btn_roll.addEventListener('click', diceRoll);
