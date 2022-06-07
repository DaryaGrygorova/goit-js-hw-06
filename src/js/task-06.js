const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', checkValidity);

function checkValidity(event) {
  const validValue = parseInt(inputEl.dataset.length);
  const checkingValue = event.target.value.length;

  if (checkingValue === 0) { inputEl.classList.remove('invalid', 'valid'); return; };

  if (checkingValue === validValue) {
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.replace('invalid', 'valid');
    } else {
      inputEl.classList.add('valid');
    }
  } else {
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.replace('valid', 'invalid');
    } else {
      inputEl.classList.add('invalid');
    }
  };
}