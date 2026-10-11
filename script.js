const openGiftButton = document.getElementById("openGift");
const experience = document.getElementById("birthdayExperience");

openGiftButton.addEventListener("click", () => {
  openGiftButton.classList.add("gift-opening-animation");
  launchConfetti(65);
  window.setTimeout(() => {
    document.getElementById("giftOpening").classList.add("hidden");
    experience.classList.remove("hidden");
    experience.classList.add("reveal");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 650);
});

document.getElementById("openSurprise").addEventListener("click", () => {
  ["celebration", "memories", "letter", "finalSurprise"].forEach((id, index) => {
    const section = document.getElementById(id);
    section.classList.remove("hidden");
    section.classList.add("reveal");
    section.style.animationDelay = `${index * 120}ms`;
  });
  document.getElementById("openSurprise").textContent = "Your wishes are unwrapped! 💖";
  document.getElementById("openSurprise").disabled = true;
  document.getElementById("celebration").scrollIntoView({ behavior: "smooth" });
  launchConfetti(90);
});

document.getElementById("blowCandles").addEventListener("click", () => {
  document.querySelector(".candle-row").textContent = "✨ ✨ ✨";
  document.getElementById("wishMessage").textContent =
    "Your candles are out! May your beautiful wish come true. 💖";
  launchConfetti(55);
});

document.getElementById("celebrateAgain").addEventListener("click", () => {
  launchConfetti(100);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function launchConfetti(amount) {
  const pieces = ["💖", "✨", "🌸", "🎉", "💜", "🦋"];
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("span");
    item.className = "confetti";
    item.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    item.style.left = `${Math.random() * 100}vw`;
    item.style.fontSize = `${12 + Math.random() * 18}px`;
    item.style.animationDuration = `${2.5 + Math.random() * 3.5}s`;
    item.style.animationDelay = `${Math.random() * 1.5}s`;
    document.body.appendChild(item);
    item.addEventListener("animationend", () => item.remove());
  }
}
