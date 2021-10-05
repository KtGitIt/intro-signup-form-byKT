'use strict';

const submitBtn = document.querySelector('.submit-btn');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

// Email Validation
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Name Validation
function isName(name) {
  return /^[a-zA-Z]+$/.test(name);
}

// display error if invalid
function displayErrorFor(input, message) {
  input.classList.add('input-error');
  const errorMsg = input.parentElement;
  const small = errorMsg.querySelector('small');
  small.innerText = message;
  small.style.visibility = 'visible';
}

// hide error if valid
function hideErrorFor(input) {
  input.classList.remove('input-error');
  const errorMsg = input.parentElement;
  const small = errorMsg.querySelector('small');
  small.style.visibility = 'hidden';
}

// check for validation
function validateInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    displayErrorFor(firstName, 'First Name cannot be empty');
  } else if (!isName(firstNameValue)) {
    displayErrorFor(firstName, 'Invalid Name');
  } else hideErrorFor(firstName);

  if (lastNameValue === '') {
    displayErrorFor(lastName, 'Last Name cannot be empty');
  } else if (!isName(lastNameValue)) {
    displayErrorFor(lastName, 'Invalid Name');
  } else hideErrorFor(lastName);

  if (emailValue === '') {
    displayErrorFor(email, 'Email cannont be empty');
  } else if (!isEmail(emailValue)) {
    displayErrorFor(email, 'Looks like this is not an email');
  } else hideErrorFor(email);

  if (passwordValue === '') {
    displayErrorFor(password, 'Password cannot be empty');
  } else hideErrorFor(password);
}

// Submit for validation
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validateInputs();
});
