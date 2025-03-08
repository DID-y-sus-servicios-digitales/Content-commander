cconst image = document.getElementById('img');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');

let currentWidth = 16; // Ancho inicial de la imagen

zoomInButton.addEventListener('click', () => {
  currentWidth += 600; // Aumentar el ancho en 20 píxeles
  image.style.width = `${currentWidth}px`;
});

zoomOutButton.addEventListener('click', () => {
  currentWidth -= 600; // Reducir el ancho en 20 píxeles
  image.style.width = `${currentWidth}px`;
});
