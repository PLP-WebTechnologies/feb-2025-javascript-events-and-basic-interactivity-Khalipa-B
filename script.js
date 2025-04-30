// Form validation
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const service = document.getElementById("service").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("serviceError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    // Name Validation
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email.";
      valid = false;
    }

    // Password Validation
    if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters.";
      valid = false;
    }

    // Service Validation
    if (service === "") {
      document.getElementById("serviceError").textContent =
        "Please select a service.";
      valid = false;
    }

    if (valid) {
      document.getElementById("successMessage").textContent =
        "Appointment booked successfully!";
      document.getElementById("appointmentForm").reset();
    }
  });

// Theme toggle event
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("alt-theme");
});

// Button click event (changing text)
const button = document.querySelector(".interactive-button");
button.addEventListener("click", function () {
  button.textContent = "Thanks for Booking!";
});

// Image Gallery Hover Effect
const galleryImages = document.querySelectorAll(".gallery-images img");
galleryImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";
  });
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
  });
});

// Tabs functionality
const tabs = document.getElementById("serviceTab");
const tabContent = document.getElementById("serviceContent");

tabs.addEventListener("click", function () {
  tabContent.classList.toggle("active");
});

// Keypress detection
document.addEventListener("keypress", function (e) {
  console.log(`Key pressed: ${e.key}`);
});

// Long press or double-click detection
let pressTimer;
document.addEventListener("mousedown", function (e) {
  pressTimer = setTimeout(() => {
    alert("Long press detected! 🎉");
  }, 1500);
});

document.addEventListener("mouseup", function () {
  clearTimeout(pressTimer);
});

document.addEventListener("dblclick", function () {
  alert("Double-click detected! 🤩");
});
