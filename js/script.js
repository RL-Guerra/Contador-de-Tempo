// Configuração da data de início do relacionamento
const startDate = new Date("2025-01-27T22:50:00");

// Atualiza o contador de tempo
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    document.getElementById("timer").innerText =
        `${years} anos, ${months % 12} meses, ${days % 30} dias, ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Slideshow de fotos
const images = ["img/mp1.png", "img/mp2.png"]; // Substituir com suas imagens
let index = 0;
const slide = document.getElementById("slide");

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    slide.src = images[index];
});

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    slide.src = images[index];
});