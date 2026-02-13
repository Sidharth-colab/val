document.addEventListener("DOMContentLoaded", () => {
  const kissWrapper = document.getElementById("kissWrapper");
  if (!kissWrapper) return; // safety check

  const kissGif = document.getElementById("kissGif");
  const afterGif = document.getElementById("afterGif");
  const counterEl = document.getElementById("counter");
  const nextBtn = document.getElementById("nextBtn");
  const kissContainer = document.getElementById("kissContainer");

  let kisses = 0;
  const goal = 10;

  // Create flying kiss
  function spawnKiss(x, y) {
    const kiss = document.createElement("div");
    kiss.className = "flying-kiss";
    kiss.innerText = "💋";
    kiss.style.left = x + "px";
    kiss.style.top = y + "px";

    kissContainer.appendChild(kiss);
    setTimeout(() => kiss.remove(), 2000);
  }

  // Handle tap / click
  function handleTap(e) {
    kisses++;
    counterEl.innerText = kisses;

    let x, y;
    if (e.type.startsWith("touch")) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }

    // spawn multiple kisses
    spawnKiss(x, y);
    spawnKiss(x + 20, y - 10);
    spawnKiss(x - 20, y - 10);

    // Goal reached
    if (kisses >= goal) {
      kissGif.classList.add("hidden");
      afterGif.classList.remove("hidden");
      afterGif.classList.add("bounce");
      kissnextBtn.classList.remove("hidden");
    }
  }

  // Events
  kissWrapper.addEventListener("click", handleTap);

  kissWrapper.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevents double fire
    handleTap(e);
  });

  // Next button
  kissnextBtn.addEventListener("click", () => {
    window.location.href = "valentinesday.html";
  });
});
