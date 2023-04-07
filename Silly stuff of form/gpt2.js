const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());
  const gender = document.getElementById('gender').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const photo = document.getElementById('photo').files[0];
  
  let errors = [];

  if (name === '') {
    errors.push('Please enter your name');
}

if (isNaN(age) || age < 18 || age > 100) {
errors.push('Please enter a valid age between 18 and 100');
}

if (gender === '') {
errors.push('Please select a gender');
}

if (email === '') {
errors.push('Please enter your email');
}

if (phone === '') {
errors.push('Please enter your phone number');
}

if (photo === undefined) {
errors.push('Please upload a photo');
}

if (errors.length > 0) {
const errorContainer = document.querySelector('.error');
errorContainer.innerHTML = '';errors.forEach(error => {
    const errorElement = document.createElement('p');
    errorElement.textContent = error;
    errorContainer.appendChild(errorElement);
  });} else {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', photo);fetch('submit.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const successContainer = document.querySelector('.success');
        successContainer.textContent = data.message;
        form.reset();
      })
      .catch(error => console.error(error));}
    });