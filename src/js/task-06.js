const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', event => {
  if (event.target.value.length < inputEl.dataset.length) {
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.replace('valid', 'invalid');
    } else {
      inputEl.classList.add('invalid');
    }
  } else {
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.replace('invalid', 'valid');
    } else {
      inputEl.classList.add('valid');
    }
  }
});
