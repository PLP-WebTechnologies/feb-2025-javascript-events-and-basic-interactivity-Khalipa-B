// Form validation and event listener for Nail Salon website

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("serviceError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email.";
      valid = false;
    }

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

// Interactive element: toggle theme color

document.getElementById("toggleTheme").addEventListener("click", function () {
  const container = document.querySelector(".container");
  container.classList.toggle("alt-theme");
});
