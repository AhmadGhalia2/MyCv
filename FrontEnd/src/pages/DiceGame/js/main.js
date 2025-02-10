import Player from "./modules/Player.js";

document.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector("#start");
  const player_area = document.querySelector("#player-area");
  const computer_area = document.querySelector("#computer-area");
  const roll = document.querySelector("#roll");
  const stop = document.querySelector("#stop");
  const player_sum = document.querySelector("#player-sum");
  const player_rolls = document.querySelector("#player-rolls");
  const computer_sum = document.querySelector("#computer-sum");
  const computer_rolls = document.querySelector("#computer-rolls");
  const computer_roll = document.querySelector("#computer-roll");
  const player_winner = document.querySelector("#player_winner");
  const computer_winner = document.querySelector("#computer_winner");

  const player = new Player();
  const computer = new Player();

  start.addEventListener("click", function () {
    player.reset();
    player_sum.textContent = player.sum();
    player_rolls.textContent = player.rolls();
    player_area.classList.remove("hidden");
    computer_area.classList.add("hidden");
    player_winner.classList.add("hidden");
    computer_winner.classList.add("hidden");
  });

  roll.addEventListener("click", () => {
    player.roll();
    player_sum.textContent = player.sum();
    player_rolls.textContent = player.rolls();
  });

  stop.addEventListener("click", function () {
    computer.reset();
    computer_sum.textContent = computer.sum();
    computer_rolls.textContent = computer.rolls();
    computer_area.classList.remove("hidden");
  });

  computer_roll.addEventListener("click", () => {
    while (computer.sum() <= 18) {
      computer.roll();
      computer_sum.textContent = computer.sum();
      computer_rolls.textContent = computer.rolls();
    }
    let winner = player_winner;
    if (player.sum() > 21) {
      winner = computer_winner;
    } else if (computer.sum() > 21) {
      winner = player_winner;
    } else if (computer.sum() >= player.sum()) {
      winner = computer_winner;
    }
    winner.classList.remove("hidden");
  });
});