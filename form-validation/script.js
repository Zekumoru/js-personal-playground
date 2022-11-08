const form = document.querySelector('form');
const email = form.querySelector('#email');
const country = form.querySelector('#country');
const zipCode = form.querySelector('#zip-code');
const password = form.querySelector('#password');
const confirmPassword = form.querySelector('#confirm-password');

email.addEventListener('keyup', onKeyup);
country.addEventListener('keyup', onKeyup);
zipCode.addEventListener('keyup', onKeyup);
password.addEventListener('keyup', onKeyup);
confirmPassword.addEventListener('keyup', () => {
  confirmPassword.setCustomValidity('');
  checkConfirmPassword();
});

email.addEventListener('invalid', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please provide a valid email address.');
    return;
  }
  
  email.setCustomValidity('Email address is required.');
});

country.addEventListener('invalid', () => {
  country.setCustomValidity('Country is required.');
});

zipCode.addEventListener('invalid', () => {
  if (zipCode.validity.patternMismatch) {
    zipCode.setCustomValidity('Please provide a valid zip code.');
    return;
  }

  zipCode.setCustomValidity('Zip code is required.');
});

password.addEventListener('invalid', () => {
  if (password.validity.tooShort) {
    password.setCustomValidity(`Password must be 8 characters long.\nNeed ${password.minLength - password.value.length} characters left.`);
    return;
  }

  password.setCustomValidity('Password is required.');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!email.reportValidity()) return;
  if (!country.reportValidity()) return;
  if (!zipCode.reportValidity()) return;
  if (!password.reportValidity()) return;
  if (!checkConfirmPassword()) return;

  console.log({
    email: email.value,
    country: country.value,
    'zip-code': zipCode.value,
    password: password.value,
  });
});

function onKeyup(e) {
  e.target.setCustomValidity('');
  e.target.reportValidity();
}

function checkConfirmPassword() {
  if (!confirmPassword.value || password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Password does not match.')
  }
  return confirmPassword.reportValidity();
}
