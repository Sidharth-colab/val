/*                 Heart Game         */

const heart = document.getElementById("heart");
const startText = document.getElementById("startText");

let size = 1;

if (heart) {
  heart.addEventListener("click", () => {
    heart.classList.remove("idle");
    heart.classList.add("grow-vibrate");

    size += 0.4;
    heart.style.setProperty("--scale", size);

    if (size > 3.2 && startText) {
      startText.style.opacity = "0";
    }

    if (size >= 8) {
      heart.classList.remove("grow-vibrate");
      heart.classList.add("explode");

      setTimeout(() => {
        window.location.href = "day2.html";
      }, 1000);
    }
  });
}



/* NAVIGATION-----------------------*/

function goNext() {
  window.location.href = "roseday.html";
}

function goToChocolateDay() {
  window.location.href = "chocolateday.html";
}

function goToProposeDay() {
  window.location.href = "proposeday.html";
}
function sayYes() {
  window.location.href = "chocolateday.html";
}


const dodgeBtn = document.getElementById("dodgeYes");

if (dodgeBtn) {
  dodgeBtn.addEventListener("mouseenter", moveButton);
  dodgeBtn.addEventListener("touchstart", moveButton);
}

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  dodgeBtn.style.transform = `translate(${x}px, ${y}px)`;
}






/*Buttons on Proposeday------------------*/

const correctBtn = document.querySelector(".correct");
const wrongBtns = document.querySelectorAll(".wrong");

if (correctBtn) {
  correctBtn.addEventListener("click", () => {
    window.location.href = "chocolateday.html";
  });
}

wrongBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Wrong 😝";
    btn.style.background = "gray";

    // optional move effect
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
});


