const inputEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

inputEl.addEventListener('input', event => {
  textSpanEl.style.fontSize = `${event.target.value}px`;
});
