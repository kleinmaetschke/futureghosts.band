document.getElementById('contact-link').addEventListener('click', function(event) {
  event.preventDefault();
  grecaptcha.execute();
});

function onSubmit(token) {
  window.location.href = 'mailto:heyfutureghosts@gmail.com';
}