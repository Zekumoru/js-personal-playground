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
  fetching = true;
  statusBar.textContent = 'Fetching image...';

  getGiphy(search, (url) => {
    img.src = url;
  statusBar.textContent = 'Fetched image.';
  fetching = false;
  });
}

function getGiphy(search, urlFn) {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${search}`, {
    mode: 'cors',
  }).then((response) => {
    return response.json();
  }).then((response) => {
    if (typeof urlFn === 'function') urlFn(response.data.images.original.url);
  }).catch(() => {
    if (typeof urlFn === 'function') urlFn(null);
  });
}
