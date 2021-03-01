import { registerImage } from './lazy';
//Boton de fectch
const mountNode = document.querySelector('#mount');
const addButton = document.querySelector('#add');
const cleanButton = document.querySelector('#clean');

// Creacion de imagenes
const baseUrl = 'https://randomfox.ca/images/';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function addImage(node, url) {
  //create image node
  const imagen = document.createElement('img');
  imagen.width = '400';
  imagen.dataset.src = `${url}${getRandomInt(1, 120)}.jpg`;
  imagen.className = 'mx-auto rounded-lg h-auto';

  //create image node container
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'bg-gray-300 mt-10 rounded-lg ';
  imageWrapper.style.minHeight = '220px';
  imageWrapper.style.display = 'inline-block';

  //append image node container to mount node
  imageWrapper.appendChild(imagen);
  node.appendChild(imageWrapper);

  //Image LOGGER
  appendedImages++;
  printLog();

  //add lazy loading listener
  registerImage(imageWrapper);
}

async function cleanImages() {
  [...mountNode.childNodes].forEach((child) => {
    child.remove();
  });
}

//Event listening
addButton.addEventListener('click', () => {
  addImage(mountNode, baseUrl);
});
cleanButton.addEventListener('click', () => {
  appendedImages = 0;
  loadedImages = 0;
  cleanImages();
});
//Cuadro gris antes de que cargen las imagenes
//Boton que limpia todo el HTML de las imagenes
//reporte de imagenes
