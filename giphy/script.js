const img = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');
const outcome = document.querySelector('.status');
let fetching = false;

button.addEventListener('click', () => search(input.value));
input.addEventListener('keyup', (e) => {
  if (e.key !== 'Enter') return;
  search(input.value);
});

setImage('cats');

function search(value) {
  if (!value) return;
  setImage(value);
}

function setImage(search) {
  getGiphy(search, (url) => {
    if (!url) return;
    img.src = url;
  });
}

function getGiphy(search, urlFn) {
  fetching = true;
  outcome.textContent = 'Fetching image...';

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${search}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => {
    fetching = false;
    if (typeof urlFn === 'function') urlFn(response.data.images.original.url);
    outcome.textContent = 'Fetched image.';
  }).catch(() => {
    fetching = false;
    if (typeof urlFn === 'function') urlFn(null);
    outcome.textContent = `Image could not be found!`;
  });
}
