//Boton de fectch
const mountNode = document.querySelector('#mount');

const reqButton = document.createElement('button');
reqButton.textContent = 'Load 🦊';
reqButton.className =
  'bg-indigo-700 text-gray-50 p-4 rounded-lg focus:outline-none';
mountNode.appendChild(reqButton);

// Creacion de imagenes
const baseUrl = 'https://randomfox.ca/images/';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addImage(node, url) {
  const image = document.createElement('img');
  image.width = '400';
  image.src = `${url}${getRandomInt(1, 120)}.jpg`;
  image.alt = 'cute fox';
  image.className = 'mx-auto rounded';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'p-4';
  imageContainer.append(image);

  node.append(imageContainer);
  console.log('button clicked');
}

//Event listening
reqButton.addEventListener('click', () => {
  addImage(mountNode, baseUrl);
});
