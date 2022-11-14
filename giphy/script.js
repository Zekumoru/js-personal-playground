const search = 'cats';
const img = document.querySelector('img');
const button = document.querySelector('button');
let fetching = false;

button.addEventListener('click', () => {
  setImage(search);
});

setImage(search);

function setImage(search) {
  fetching = true;
  getGiphy(search, (url) => {
    img.src = url;
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
