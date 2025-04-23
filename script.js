// script.js
(() => {
  'use strict';

  // Fetch the form we want to apply custom validation to
  const form = document.querySelector('.needs-validation');

  // Prevent submission if form is invalid
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
})();
