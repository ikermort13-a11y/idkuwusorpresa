const heartContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const colors = ["#ffffff", "#cfa7ff", "#b57bff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.color = randomColor;
  heart.style.fontSize = (20 + Math.random() * 25) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  
  const neonColors = ["#00ff00", "#00ffff", "#ff00ff", "#ffff00", "#ff0080", "#00ff80"];
  const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
  
  star.innerHTML = "✨";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.color = randomColor;
  star.style.animationDuration = (2 + Math.random() * 2) + "s";
  
  heartContainer.appendChild(star);
}

// Crear estrellas iniciales
for (let i = 0; i < 20; i++) {
  createStar();
}

setInterval(createHeart, 250);
