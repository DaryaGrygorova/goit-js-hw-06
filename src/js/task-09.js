function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonEl = document.querySelector('button.change-color');
const textColorSpanEl = document.querySelector('span.color');

changeColorButtonEl.addEventListener('click', event => {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorSpanEl.textContent = document.body.style.backgroundColor;
});
