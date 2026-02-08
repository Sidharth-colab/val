const skipBtn = document.getElementById("skipBtn");
const yesBtn = document.getElementById("yesBtn");

// tease when clicking skip
skipBtn.addEventListener("click", () => {
  alert("No skipping 😝 You must press YES!");
});

// go to next page / section
yesBtn.addEventListener("click", () => {
  window.location.href = "valentine.html"; 
  // later this can open your 8 days page
});
