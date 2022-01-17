// Oyun tahtasındaki ve arkaplandaki bilgileri resetleyen fonksiyon.
function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML =
    'Oyunu kazanan oyuncu, <span id="winner">Oyuncu</span>!';
  gameOver.style.display = "none";

  let boardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const boardItem = gameBoardElement.children[boardIndex];
      boardItem.textContent = "";
      boardItem.classList.remove("disabled");
      boardIndex++;
    }
  }
}
// Oyunu başlatan fonksiyon.
function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Oyuna başlamadan önce oyuncu adlarını giriniz!");
    return;
  }
  resetGame();
  activePlayerName.textContent = players[activePlayer].name;
  game.style.display = "block";
}
// Oyuncu değiştiren fonksiyon.
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}
// Oyun tahtasındaki kutulardan her birini seçerken çalışan fonksiyon.
function selectOneGameBoardField(event) {
  if (event.target.tagName !== "LI" || gameIsOver === true) {
    return;
  }
  activePlayerName.textContent = players[activePlayer].name;

  const selectedField = event.target;

  const selectedRow = selectedField.dataset.row - 1;
  const selectedColumn = selectedField.dataset.column - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Boş bir kutu seçiniz!");
    return;
  }

  selectedField.textContent = players[activePlayer].mark;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerPlayerId = checkIsGameOver();

  if (winnerPlayerId !== 0) {
    endGame(winnerPlayerId);
  }
  currentRound++;
  switchPlayer();
}
// Oyunun bitip bitmediğini kontrol eden fonksiyon, geri dönüş değeri olarak -1,0,1,2'den birisi döner.
function checkIsGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}
// Gerekli şartlardan sonra oyunu bitiren fonksiyon.
function endGame(winnerId) {
  gameIsOver = true;
  gameOver.style.display = "block";

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOver.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOver.firstElementChild.textContent = "Oyun berabere!";
  }
}
