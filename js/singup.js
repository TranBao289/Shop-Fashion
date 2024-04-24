
const button = document.getElementById('singin');
const message = document.getElementById('singup');

button.addEventListener('click', function() {
 
  button.style.display = 'none';

 
  message.style.display = 'block';


  message.textContent = 'Thank you for subscribing!';
});
