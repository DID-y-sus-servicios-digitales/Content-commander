const content = document.getElementById('content');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');

let currentFontSize = 16; // Tamaño de fuente inicial

zoomInButton.addEventListener('click', () => {
  currentFontSize += 2; // Aumentar el tamaño de fuente en 2 píxeles
  content.style.fontSize = `${currentFontSize}px`;
});

zoomOutButton.addEventListener('click', () => {
  currentFontSize -= 2; // Reducir el tamaño de fuente en 2 píxeles
  content.style.fontSize = `${currentFontSize}px`;
});
