let day = 0;

const days = [
  {
    title: "Rose Day 🌹",
    message: "Just like this rose, my feelings for you are beautiful and pure ❤️"
  },
  {
    title: "Propose Day 💍",
    message: "If I had one wish, it would be to be yours forever 💕"
  },
  {
    title: "Chocolate Day 🍫",
    message: "Life with you is sweeter than any chocolate 😘"
  },
  {
    title: "Teddy Day 🧸",
    message: "Whenever you feel low, imagine my hug around you 🥰"
  },
  {
    title: "Promise Day 🤞",
    message: "I promise to stand by you, always and forever ❤️"
  },
  {
    title: "Hug Day 🤗",
    message: "This message carries the warmest hug just for you 💖"
  },
  {
    title: "Kiss Day 💋",
    message: "A kiss to remind you how special you are to me 😘"
  },
  {
    title: "Valentine’s Day ❤️",
    message: "Happy Valentine’s Day my love. You are my everything 💘"
  }
];

document.getElementById("nextBtn").addEventListener("click", () => {
  day++;
  if (day < days.length) {
    document.getElementById("dayTitle").innerText = days[day].title;
    document.getElementById("message").innerText = days[day].message;
  }
});