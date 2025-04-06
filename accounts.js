
// Get form elements
const form = document.querySelector('form');
const username = document.querySelector('input[name="name"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector('input[name="confirm_password"]');
const college = document.querySelector('input[name="College"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Basic validation
  if (username.value.length < 3) {
    alert('Username must be at least 3 characters long');
    return;
  }

  if (password.value.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }

  // Validate passwords match
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!');
    return;
  }

  // Check if username already exists
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some(user => user.username === username.value)) {
    alert('Username already exists! Please choose another.');
    return;
  }

  // Create user object
  const user = {
    username: username.value,
    email: email.value,
    password: password.value, // In production, this should be hashed
    college: college.value
  };

  // Store in localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Clear form
  form.reset();
  
  // Redirect to login page
  window.location.href = 'loggin.html';
});
