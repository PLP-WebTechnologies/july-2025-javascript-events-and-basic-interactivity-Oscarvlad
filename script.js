// Part 1: Event Handling
// Feature 1: Toggle Light/Dark Mode
document.getElementById('toggleModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Feature 2: Hover Effect
const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseover', () => {
  hoverText.textContent = 'You hovered over me!';
});
hoverText.addEventListener('mouseout', () => {
  hoverText.textContent = 'Hover over me!';
});

// Part 2: Interactive Features
// Feature 1: Counter Game
let count = 0;
document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  document.getElementById('counter').textContent = count;
});

// Feature 2: Collapsible FAQ Section
document.getElementById('faqToggleBtn').addEventListener('click', () => {
  const faqContent = document.getElementById('faqContent');
  faqContent.classList.toggle('hidden');
});

//Part 3: Form Validation
document.getElementById('userForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  let isValid = true;

  // Validate Name
  const name = document.getElementById('name').value.trim();
  if (!name) {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById('password').value.trim();
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  // Show success message if all fields are valid
  if (isValid) {
    document.getElementById('formResult').textContent = 'Form submitted successfully!';
  }
});