const search = 'cats';
const img = document.querySelector('img');
const button = document.querySelector('button');
const statusBar = document.querySelector('.status');
let fetching = false;

button.addEventListener('click', () => {
  setImage(search);
});

setImage(search);

function setImage(search) {
  getGiphy(search, (url) => {
    if (!url) return;
    img.src = url;
  });
}

function getGiphy(search, urlFn) {
  fetching = true;
  statusBar.textContent = 'Fetching image...';

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${search}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => {
    fetching = false;
    if (typeof urlFn === 'function') urlFn(response.data.images.original.url);
    statusBar.textContent = 'Fetched image.';
  }).catch(() => {
    fetching = false;
    if (typeof urlFn === 'function') urlFn(null);
    statusBar.textContent = `Image could not be found!`;
  });
}
