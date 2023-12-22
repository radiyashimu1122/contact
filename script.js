function validateForm() {
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 var message = document.getElementById('message').value;
 var errorMessage = document.getElementById('error-message');

 errorMessage.innerHTML = '';

 if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
     errorMessage.innerHTML = 'All fields are required.';
     return false;
 }

 // Add more complex validation if needed (e.g., email format)

 return true;
}