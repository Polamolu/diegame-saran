'use strict';

let roll = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');
let score = document.querySelector('.p9');
let score1 = document.querySelector('.p6');
let cummulative1 = document.querySelector('.p7');
let div3 = document.querySelector('.div-3');
let div4 = document.querySelector('.div-4');
let current = 0;
roll.addEventListener('click', function () {
  let random = Math.trunc(Math.random() * 6 + 1);
  if (
    Number(cummulative.textContent) <= 30 &&
    Number(cummulative1.textContent) <= 30 &&
    Number(score.textContent) <= 30 &&
    Number(score1.textContent) <= 30
  ) {
    dice.src = `dice-${random}.png`;
    if (random === 1) {
      if (current === 0) {
        score.textContent = 0;
        current = 1;
      } else {
        score1.textContent = 0;
        current = 0;
      }
    } else if (random != 1) {
      if (current === 0) {
        score.textContent = Number(score.textContent) + random;
        if (Number(score.textContent) >= 30) {
          div3.style.backgroundColor = 'green';
          alert('player 1 won the game');
        }
      } else {
        score1.textContent = Number(score1.textContent) + random;
        if (Number(score1.textContent) >= 30) {
          div4.style.backgroundColor = 'green';
          alert('player 2 won the game');
        }
      }
    }
  }
});
let hold = document.querySelector('.btn--hold');
let cummulative = document.querySelector('.p5');
hold.addEventListener('click', function () {
  if (
    Number(cummulative.textContent) <= 30 &&
    Number(cummulative1.textContent) <= 30
  ) {
    if (current === 0) {
      cummulative.textContent =
        Number(cummulative.textContent) + Number(score.textContent);
      score.textContent = 0;
      current = 1;
      if (Number(cummulative.textContent) >= 30) {
        div3.style.backgroundColor = 'green';
        alert('player 1 won the game');
      }
    } else {
      cummulative1.textContent =
        Number(cummulative1.textContent) + Number(score1.textContent);
      score1.textContent = 0;
      current = 0;
      if (Number(cummulative1.textContent) >= 30) {
        div4.style.backgroundColor = 'green';
        alert('player 2 won the game');
      }
    }
  }
});
let newbtn = document.querySelector('.btn--new');
newbtn.addEventListener('click', function () {
  score.textContent = 0;
  score1.textContent = 0;
  cummulative.textContent = 0;
  cummulative1.textContent = 0;
  div3.style.backgroundColor = 'pink';
  div4.style.backgroundColor = 'aliceblue';
  current = 0;
});
