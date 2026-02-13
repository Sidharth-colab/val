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

function goToTeddyDay() {
  window.location.href = "teddyday.html";
}

function goToPromiseDay() {
  window.location.href = "promiseday.html";
}

function goToHugDay() {
  window.location.href = "hugday.html";
}


function goToKissDay() {
    window.location.href = "kissday.html";
}

function goToValentinesDay() {
  window.location.href = "valentinesday.html";
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


const teddy = document.getElementById("teddy");
const hiddenMessage = document.getElementById("hiddenMessage");

if (teddy) {
  teddy.addEventListener("click", () => {
    teddy.classList.add("open");
    hiddenMessage.classList.add("show");
  });
}

const acceptBtn = document.getElementById("acceptPromise");
const acceptedMessage = document.getElementById("acceptedMessage");
const confettiContainer = document.getElementById("confetti-container");

if (acceptBtn) {
  acceptBtn.addEventListener("click", () => {
    acceptedMessage.classList.add("show");
    acceptBtn.style.display = "none";
    launchConfetti();
  });
}

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff69b4", "#ff1493", "#ffc0cb", "#ffffff"][
        Math.floor(Math.random() * 4)
      ];

    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}






















