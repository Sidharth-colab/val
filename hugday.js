const holdBtn = document.getElementById('holdBtn');
const progress = holdBtn.querySelector('.progress');
const beforeGif = document.getElementById('beforeGif');
const afterGif = document.getElementById('afterGif');
const nextBtn = document.getElementById('nextBtn');
let holdTime = 0;
let interval;

holdBtn.addEventListener('mousedown', startHold);
holdBtn.addEventListener('touchstart', startHold);

holdBtn.addEventListener('mouseup', cancelHold);
holdBtn.addEventListener('mouseleave', cancelHold);
holdBtn.addEventListener('touchend', cancelHold);

function startHold() {
    interval = setInterval(() => {
        holdTime += 1;
        let width = Math.min(holdTime, 100);
        progress.style.width = width + '%';
        if (holdTime >= 100) {
            completeHug();
            cancelHold();
        }
    }, 20);
}

function cancelHold() {
    clearInterval(interval);
    if (holdTime < 100) progress.style.width = '0%';
    holdTime = 0;
}

function completeHug() {
    // Hide before hug and hold button
    beforeGif.classList.add('hidden');
    holdBtn.classList.add('hidden');

    // Show after hug GIF
    afterGif.classList.remove('hidden');

    // Launch confetti
    launchConfetti();

    // Show Next button **after confetti finishes**
    setTimeout(() => {
        nextBtn.style.display = 'block';
    }, 2000); // 2 seconds = confetti duration
}

function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }
}


nextBtn.addEventListener('click', () => {
    window.location.href = 'kissday.html';
});
