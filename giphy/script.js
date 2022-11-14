const search = 'cats';
const img = document.querySelector('img');

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${search}`, {
  mode: 'cors',
}).then((response) => {
  return response.json();
}).then((response) => {
  img.src = response.data.images.original.url;
});
