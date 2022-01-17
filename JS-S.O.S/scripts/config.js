// Oyuncu düzenleme sayfasını açan fonksiyon.
function openPlayerEditConfig(event) {
  editedPlayer = +event.target.dataset.playerid;

  playerConfigOverlay.style.display = "block";

  bgDropOverlay.style.display = "block";
}

// Oyuncu düzenleme sayfasını kapatan fonksiyon
function closePlayerEditConfig() {
  playerConfigOverlay.style.display = "none";

  bgDropOverlay.style.display = "none";

  form.firstElementChild.classList.remove("error");

  configErrorsInfo.textContent = "";

  form.firstElementChild.lastElementChild.value = "";
}

// Oyuncu düzenleme sayfasında girilen değeri kaydeden fonksiyon.
function savePlayerNameConfig(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const enteredPlayerName = formData.get("playerName").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");

    configErrorsInfo.textContent = "Geçerli bir ad giriniz.";

    return;
  }

  const updatedPlayerData = document.getElementById(
    "data-player" + editedPlayer
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerEditConfig();
}
