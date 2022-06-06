// //------------------------------------
// // version 1
// //------------------------------------

let counterValue = 0;

const decrementValue = () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = `${counterValue}`;
};

const incrementValue = () => {
  counterValue += 1;
  document.querySelector('#value').textContent = `${counterValue}`;
};

const decrementButtonEl = document.querySelector('[data-action="decrement"]');
decrementButtonEl.addEventListener('click', decrementValue);

const incrementButtonEl = document.querySelector('[data-action="increment"]');
incrementButtonEl.addEventListener('click', incrementValue);

// //------------------------------------
// // version 2
// //------------------------------------

// let counterValue = 0;
// const incrementButtonEl = document.querySelector('[data-action="increment"]');
// const decrementButtonEl = document.querySelector('[data-action="decrement"]');

// const counterEl = document.querySelector('#counter');
// counterEl.addEventListener('click', (event) => {
//     if (event.target === incrementButtonEl) {
//         counterValue += 1
//     } else if (event.target === decrementButtonEl) {
//         counterValue -= 1
//     }
//     document.querySelector('#value').textContent = `${counterValue}`
// }
// );

// //------------------------------------
// version 3
// //------------------------------------
// const counterValue = {
//     value: 0,

//     decrementValue() {
//         this.value -= 1;
//         document.querySelector('#value').textContent = `${this.value}`
//     },

//     incrementValue() {
//         this.value += 1;
//         document.querySelector('#value').textContent = `${this.value}`
//     },
// };

// const decrementButtonEl = document.querySelector('[data-action="decrement"]');
// decrementButtonEl.addEventListener('click', counterValue.decrementValue.bind(counterValue));

// const incrementButtonEl = document.querySelector('[data-action="increment"]');
// incrementButtonEl.addEventListener('click', counterValue.incrementValue.bind(counterValue));
