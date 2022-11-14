const img = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');
const outcome = document.querySelector('.status');
let fetching = false;
let loading = false;

img.addEventListener('load', () => {
  outcome.textContent = `Loaded image.`;
  loading = false;
});

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
    img.src = url ?? '';
    img.alt = (url)? search : 'Error';
  });
}

function getGiphy(search, urlFn) {
  if (fetching || loading) return;

  fetching = true;
  outcome.textContent = 'Fetching image...';

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${search}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => {
    fetching = false;
    outcome.textContent = 'Loading image...';
    if (typeof urlFn === 'function') urlFn(response.data.images.original.url);
    loading = true;
  }).catch(() => {
    fetching = false;
    if (typeof urlFn === 'function') urlFn(null);
    outcome.textContent = `Image could not be found!`;
  });
}
