// Part 1: Event Handling - Change Background Color
const changeBackgroundButton = document.getElementById('changeBackground');

changeBackgroundButton.addEventListener('click', () => {
  // Generate a random color in RGB format
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  
  // Change the background color of the body
  document.body.style.backgroundColor = randomColor;
});

// Part 2: Feature 1 - Light/Dark Mode Toggle
const themeToggleButton = document.getElementById('themeToggle');

themeToggleButton.addEventListener('click', () => {
  // Toggle a 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');
});

// Part 2: Feature 2 - Collapsible FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Find the corresponding answer
    const answer = question.nextElementSibling;

    // Toggle visibility of the answer
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Part 3: Form Validation
const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Validate each field
  let isValid = true;

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (!name) {
    showError('name-error', 'Name is required.');
    isValid = false;
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('email-error', 'Please enter a valid email address.');
    isValid = false;
  }

  // Password validation
  const password = document.getElementById('password').value.trim();
  if (password.length < 8) {
    showError('password-error', 'Password must be at least 8 characters long.');
    isValid = false;
  }

  // If all fields are valid, show success message
  if (isValid) {
    alert('Form submitted successfully!');
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(error => {
    error.textContent = '';
  });
}
