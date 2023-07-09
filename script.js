document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Form is valid, submit the data or perform further actions
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  
    function validateForm() {
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var password = document.getElementById("password").value;
      var age = document.getElementById("age").value;
      var gender = document.getElementById("gender").value;
      var date = document.getElementById("date").value;
      var color = document.getElementById("color").value;
  
      // Validate name
      if (name === "") {
        alert("Please enter your name.");
        return false;
      }
  
      // Validate email
      if (email === "") {
        alert("Please enter your email address.");
        return false;
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
  
      // Validate phone number
      if (phone === "") {
        alert("Please enter your phone number.");
        return false;
      } else if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid phone number.");
        return false;
      }
  
      // Validate password
      if (password === "") {
        alert("Please enter a password.");
        return false;
      } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
      }
  
      // Validate age
      if (age === "") {
        alert("Please enter your age.");
        return false;
      } else if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return false;
      }
  
      // Validate gender
      if (gender === "") {
        alert("Please select your gender.");
        return false;
      }
  
      // Validate date
      if (date === "") {
        alert("Please select a date.");
        return false;
      }
  
      // Validate color
      if (color === "") {
        alert("Please select a color.");
        return false;
      }
  
      return true;
    }
  
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
  