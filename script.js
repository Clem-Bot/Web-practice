// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Form validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please enter a message.";
    isValid = false;
  }

  // Success
  if (isValid) {
    successMessage.textContent = "Message sent successfully!";
    form.reset();
  }
});