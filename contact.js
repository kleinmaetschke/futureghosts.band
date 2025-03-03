document.getElementById('contact-link').addEventListener('click', function(event) {
  event.preventDefault();
  grecaptcha.execute();
});

function onSubmit(token) {
  var mailtoLink = document.createElement('a');
  mailtoLink.href = 'mailto:heyfutureghosts@gmail.com';
  mailtoLink.click();
}