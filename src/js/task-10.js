// //-----------------
// // version 1
// // При нажатии на кнопку Create количество элементов, которые отображаются
// // на экране, увеличивается на число равное введенному в input значению
// // при этом каждая новая партия начинается с элемента 30рх*30рх
// //-----------------

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const controlsEl = document.querySelector('#controls');
// const inputEl = document.querySelector('#controls input');
// const createButtonEl = document.querySelector('[data-create]');
// const destroyButtonEl = document.querySelector('[data-destroy]');
// const divElementsWrapper = document.querySelector('#boxes');

// let elementsCount = 0;

// const handlerInputEvent = event => {
//   if (event.target.value) {
//     elementsCount = event.target.value;
//   } else {
//     alert('Введите значение от 1 до 100');
//   }
//   console.log('elementsCount:', elementsCount);
// };

// const createDivElements = () => {
//   const divElements = [];

//   for (let i = 0; i < elementsCount; i += 1) {
//     const element = `<div style="background-color: ${getRandomHexColor()}; width: ${
//       30 + 10 * i
//     }px; height: ${30 + 10 * i}px;"></div>`;
//     divElements.push(element);
//   }
//   return divElements;
// };

// const handlerCreateEvent = () => {
//   divElementsWrapper.insertAdjacentHTML('beforeend', createDivElements().join(' '));
// };

// inputEl.addEventListener('blur', handlerInputEvent);
// createButtonEl.addEventListener('click', handlerCreateEvent);
// destroyButtonEl.addEventListener('click', event => (divElementsWrapper.innerHTML = ''));

// //-----------------
// // version 2
// // При нажатии на кнопку Create количество элементов, которые отображаются
// // на экране, увеличивается на число равное введенному в input значению
// // при этом каждая новая партия начинается с элемента шире и выше предыдущего на 10px
// //-----------------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const inputEl = document.querySelector('#controls input');
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const divElementsWrapper = document.querySelector('#boxes');

let elementsCount = 0;
const divElements = [];

const handlerInputEvent = event => {
  if (event.target.value) {
    elementsCount = Number(event.target.value);
  } else {
    alert('Введите значение от 1 до 100');
  }
  console.log('elementsCount:', elementsCount);
};

const createDivElements = () => {
  const counter = elementsCount + divElements.length;
  for (let i = divElements.length; i < counter; i += 1) {
    debugger
    const element = `<div style="background-color: ${getRandomHexColor()}; width: ${
      30 + 10 * i
    }px; height: ${30 + 10 * i}px; outline: 1px solid grey"></div>`;
    divElements.push(element);
  }
  return divElements;
};

const handlerCreateEvent = () => {
  divElementsWrapper.innerHTML = createDivElements().join(' ');
};

const handlerDestroyEvent = () => {
  divElementsWrapper.innerHTML = '';
  divElements.splice(0);
}

inputEl.addEventListener('blur', handlerInputEvent);
createButtonEl.addEventListener('click', handlerCreateEvent);
destroyButtonEl.addEventListener('click', handlerDestroyEvent);

// //-----------------
// // version 3 - 
// // При нажатии на кнопку Create количество элементов, которое одномоментно 
// // отображается на экране, соответствует введенному в input значению
// //-----------------

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const controlsEl = document.querySelector('#controls');
// const inputEl = document.querySelector('#controls input');
// const createButtonEl = document.querySelector('[data-create]');
// const destroyButtonEl = document.querySelector('[data-destroy]');
// const divElementsWrapper = document.querySelector('#boxes');

// let elementsCount = 0;

// const handlerInputEvent = event => {
//   if (event.target.value) {
//     elementsCount = event.target.value;
//   } else {
//     alert('Введите значение от 1 до 100');
//   }
//   console.log('elementsCount:', elementsCount);
// };

// const createDivElements = () => {
// const divElements = [];
//   for (let i = 0; i < elementsCount; i += 1) {
//     debugger
//     const element = `<div style="background-color: ${getRandomHexColor()}; width: ${
//       30 + 10 * i
//     }px; height: ${30 + 10 * i}px; outline: 1px solid grey"></div>`;
//     divElements.push(element);
//   }
//   return divElements;
// };

// const handlerCreateEvent = () => {
//   divElementsWrapper.innerHTML = createDivElements().join(' ');
// };

// const handlerDestroyEvent = () => {
//   divElementsWrapper.innerHTML = '';
//   divElements.splice(0);
// }

// inputEl.addEventListener('blur', handlerInputEvent);
// createButtonEl.addEventListener('click', handlerCreateEvent);
// destroyButtonEl.addEventListener('click', handlerDestroyEvent);

