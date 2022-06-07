const submitFormButtonEl = document.querySelector('.login-form');

const submitFormHandler = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please, fill in all the fields!');
  }

  const submitData = {
    email: email.value,
    password: password.value,
}
  console.log(submitData);
  event.currentTarget.reset();
};

submitFormButtonEl.addEventListener('submit', submitFormHandler);
