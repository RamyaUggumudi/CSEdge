// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Learn More button functionality
document.getElementById("learn-more").addEventListener("click", function () {
  alert(
    "Thank you for your interest! Scroll down to explore our features and testimonials."
  );
});

// Form submission handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // Here, you can add code to handle form submission, such as sending data to a server
    // For demonstration purposes, let's just log the form data
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    alert("Your message has been sent successfully!");
  });
