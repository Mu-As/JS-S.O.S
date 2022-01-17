// Oyun tahtasındaki değerleri tutacak dizi değişkeni.
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// Düzenleme sayfasına gidildiğinde hangi oyuncunun düzenleneceğini tutan değişken.
let editedPlayer = 0;

// Oyun başladıktan sonra sıranın hangi oyuncuda olduğunu tutan değişken.
let activePlayer = 0;

// Round bilgisini tutan değişken.
let currentRound = 1;

// Oyunun bitip bitmediğini kontrol eden değişken.
let gameIsOver = false;

// Oyundaki oyuncuların başlangıçta dizide tutulduğu değişken.
const players = [
  {
    name: "",
    mark: "S",
  },
  {
    name: "",
    mark: "O",
  },
];
// Düzenleme sayfasına ait HTML bloğu, ID ile.
const playerConfigOverlay = document.getElementById("config-overlay");

// Düzenleme sayfası açıldığında arkaplana ait HTML bloğu, ID ile.
const bgDropOverlay = document.getElementById("background-drop");

// Düzenleme sayfasındaki form bloğu, QuerySelector ile.
const form = document.querySelector("form");

// Düzenleme sayfasında hata bloğu, ID ile.
const configErrorsInfo = document.getElementById("configErrors");

// Oyun tahtasının bloğu, ID ile.
const game = document.getElementById("game");

// Sıradaki oyuncunun bloğu, ID ile.
const activePlayerName = document.getElementById("active-playerName");

// Oyun bittikten sonraki bilgiyi veren blok, ID ile.
const gameOver = document.getElementById("game-over");


// Oyuncu1 düzenleme butonu, ID ile.
const editPlayer1Btn = document.getElementById("edit-player1-btn");

// Oyuncu2 düzenleme butonu, ID ile.
const editPlayer2Btn = document.getElementById("edit-player2-btn");

// Düzenleme sayfası İptal Et butonu, ID ile.
const cancelConfigButton = document.getElementById("cancel-config-btn");

// Yeni Oyun Başlat butonu, ID ile.
const startNewGameButton = document.getElementById("startNewGameBtn");

// Oyun tahtası, ID ile.
const gameBoardElement = document.getElementById("board");


// Oyuncu düzenleme sayfasını açan event'ler.
editPlayer1Btn.addEventListener("click", openPlayerEditConfig);
editPlayer2Btn.addEventListener("click", openPlayerEditConfig);

// Oyuncu düzenleme sayfasını kapatan event'ler.
cancelConfigButton.addEventListener("click", closePlayerEditConfig);
bgDropOverlay.addEventListener("click", closePlayerEditConfig);

// Düzenleme sayfasında bulunan form'a ait submit eventi.
form.addEventListener("submit", savePlayerNameConfig);

// Yeni Oyun Başlat butonuna ait event.
startNewGameButton.addEventListener("click", startNewGame);

// Oyun başladıktan tahtaya her tıklandığında çalışacak event.
gameBoardElement.addEventListener("click", selectOneGameBoardField);
