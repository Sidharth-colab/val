const heart = document.getElementById("heart");
const startText = document.getElementById("startText");

let size = 1;

heart.addEventListener("click", () => {
 // stop idle heartbeat
  heart.classList.remove("idle");

// start vibration
  heart.classList.add("grow-vibrate");

  size += 0.4;


  // pass scale value to CSS
  heart.style.setProperty("--scale", size);


  // apply scale (fallback for browsers)
  heart.style.transform = `scale(${size})`;

  // hide text once heart starts growing
  if (size > 3.2 && startText) {
    startText.style.opacity = "0";
  }

  // explode and move to next page
  if (size >= 8) {
    heart.classList.remove("grow-vibrate");
    heart.classList.add("explode");

    setTimeout(() => {
      window.location.href = "day2.html";
    }, 1000);
  }
});
