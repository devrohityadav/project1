// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".btnLogin-popup");
  const modal = document.querySelector(".login-modal");
  const closeModal = document.querySelector(".close-modal");
  const loginForm = document.getElementById("login-form");
  const themeToggle = document.querySelector(".theme-toggle");
  
  // Function to show the login modal
  function showModal() {
    modal.classList.add("active");
  }
  
  // Function to hide the login modal
  function hideModal() {
    modal.classList.remove("active");
  }
  
  // Toggle theme
  function toggleTheme() {
    document.body.classList.toggle("light-theme");
    // Update button icon based on current theme
    if(document.body.classList.contains("light-theme")) {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  }
  
  // Check for saved theme preference on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
  }
  
  // Event Listeners
  loginBtn.addEventListener("click", showModal);
  closeModal.addEventListener("click", hideModal);
  
  // Hide modal when clicking outside the modal content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      hideModal();
    }
  });
  
  themeToggle.addEventListener("click", toggleTheme);
  
  // Handle login form submit
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // For demonstration, simply log the credentials (do not use in production)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Logging in with", username, password);
    // Close modal after submission
    hideModal();
    // Reset form
    loginForm.reset();
  });
});
