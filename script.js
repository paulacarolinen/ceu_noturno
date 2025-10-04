// Mostrar texto 
function mostrarTexto(frase) {
  const caixaTexto = document.getElementById("texto");
  caixaTexto.textContent = frase;
  caixaTexto.style.display = "block";

  setTimeout(() => {
    caixaTexto.style.display = "none";
  }, 30000);
}

// Efeito toque estrelas e lua
const estrelas = document.querySelectorAll(".estrela");
const lua = document.querySelector(".lua");

estrelas.forEach(el => {
  el.addEventListener("touchstart", () => {
    el.style.transform = "scale(1.2)";
    el.style.background = "rgb(209, 209, 133)";
  });
  el.addEventListener("touchend", () => {
    setTimeout(() => {
      el.style.transform = "scale(1)";
      el.style.background = "white";
    }, 3000);
  });
});

lua.addEventListener("touchstart", () => { lua.style.transform = "scale(1.2)"; });
lua.addEventListener("touchend", () => { setTimeout(() => { lua.style.transform = "scale(1)"; }, 200); });

// Player de música
const playlist = [
  "assets/enchanted.mp3",
  "assets/algo.mp3",
  "assets/fallin.mp3",
  "assets/contramao.mp3",
  "assets/videogames.mp3",
  "assets/princesinha.mp3",
  "assets/nothing.mp3",
  "assets/lisboa.mp3",
  "assets/n.mp3",
  "assets/daylight.mp3"
];

let indiceAtual = 0;
const player = document.getElementById("player");
const playBtn = document.getElementById("play");
const playIcon = document.getElementById("icon-play");

function tocarMusica(index) {
  if(index < 0) index = playlist.length - 1;
  if(index >= playlist.length) index = 0;
  player.src = playlist[index];
  player.play();
  indiceAtual = index;
  playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; 
}

playBtn.addEventListener("click", () => {
  if(player.paused) {
    player.play();
    playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
  } else {
    player.pause();
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
});

document.getElementById("prev").addEventListener("click", () => {
  tocarMusica(indiceAtual - 1);
});

document.getElementById("next").addEventListener("click", () => {
  tocarMusica(indiceAtual + 1);
});

player.src = playlist[indiceAtual];
playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>'; // Ícone de "Play"