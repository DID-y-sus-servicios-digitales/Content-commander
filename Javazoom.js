const image = document.getElementById('img');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');

let currentWidth = 800; // Ancho inicial de la imagen (ajusta este valor)

zoomInButton.addEventListener('click', () => {
  currentWidth += 20; // Aumentar el ancho en 20 píxeles
  image.style.width = `${currentWidth}px`;
});

zoomOutButton.addEventListener('click', () => {
  currentWidth -= 20; // Reducir el ancho en 20 píxeles
  image.style.width = `${currentWidth}px`;
});
