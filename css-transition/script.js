document.querySelector('.trigger').addEventListener('click', (e) => {
  const trigger = e.target;
  trigger.classList.toggle('clicked');
});