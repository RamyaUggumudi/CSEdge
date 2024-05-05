function validateForm() {
  // Get form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var course = document.getElementById("course").value;

  // Simple validation
  if (name === "" || email === "" || phone === "" || course === "") {
    alert("All fields are required");
    return false;
  }

  // Phone number validation (simple pattern)
  var phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return false;
  }

  // Email validation (simple pattern)
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Form submission successful
  alert("Form submitted successfully!");
  return true;
}
