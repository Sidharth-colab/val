document.addEventListener("DOMContentLoaded", function () {

  // TYPEWRITER EFFECT
  const typewriter = document.getElementById("typewriter");
  if (typewriter) {
    const text = "I Love You Forever ❤️";
    let index = 0;
    function typeEffect() {
      if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
      }
    }
    typeEffect();
  }

  // PUZZLE GAME
  const puzzleContainer = document.getElementById("puzzle");
  const size = 3;
  let tiles = [];

  function createPuzzle() {
    tiles = [];
    for (let i = 0; i < size * size; i++) {
      tiles.push(i);
    }
    tiles.sort(() => Math.random() - 0.5);
    renderPuzzle();
  }

  function renderPuzzle() {
    puzzleContainer.innerHTML = "";
    tiles.forEach((tile, index) => {
      const tileDiv = document.createElement("div");
      tileDiv.classList.add("tile");

      const row = Math.floor(tile / size);
      const col = tile % size;
      tileDiv.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;

      tileDiv.addEventListener("click", () => swapTile(index));

      puzzleContainer.appendChild(tileDiv);
    });
  }

  function swapTile(index) {
    const lastIndex = tiles.length - 1;
    if (index !== lastIndex) {
      [tiles[index], tiles[lastIndex]] = [tiles[lastIndex], tiles[index]];
    }
    renderPuzzle();
    checkWin();
  }

  function checkWin() {
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i] !== i) return; // Not solved
    }

    // Puzzle solved!
    showSurprise();
  }

  function showSurprise() {
    // Show overlay text
    const overlay = document.getElementById("surpriseOverlay");
    overlay.classList.add("show");

    // Play video
    const video = document.getElementById("loveVideo");
    video.classList.remove("hidden");
    video.play();

    // Launch confetti
    launchConfetti();

    // Hide overlay after 10 seconds and highlight video
    setTimeout(() => {
        overlay.classList.remove("show");
        video.classList.add("highlight");
    }, 10000); // 10000 ms = 10 seconds
}



  function launchConfetti() {
    const container = document.body;
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.backgroundColor =
        ["#ff69b4", "#ff1493", "#ffc0cb", "#ffffff"][Math.floor(Math.random() * 4)];
      confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
      container.appendChild(confetti);

      setTimeout(() => confetti.remove(), 4000);
    }
  }

  createPuzzle();
});
