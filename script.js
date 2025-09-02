// Toggle light/dark mode
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter button
let counter = 0;
document.getElementById('counter-btn').addEventListener('click', () => {
  counter++;
  alert(`Button clicked ${counter} times!`);
});

// FAQ collapsible section
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Form validation
document.getElementById('sample-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (name.length < 3) {
    valid = false;
    document.getElementById('name-error').textContent = 'Name must be at least 3 characters.';
  } else {
    document.getElementById('name-error').textContent = '';
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    valid = false;
    document.getElementById('email-error').textContent = 'Enter a valid email address.';
  } else {
    document.getElementById('email-error').textContent = '';
  }

  // Password validation
  const password = document.getElementById('password').value;
  if (password.length < 6) {
    valid = false;
    document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
  } else {
    document.getElementById('password-error').textContent = '';
  }

  if (valid) {
    document.getElementById('form-success').textContent = 'Form submitted successfully!';
  }
});
