document.getElementById('contact-link').addEventListener('click', function(event) {
  event.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6LeLdukqAAAAAGsZeN5CLTMTJY5bvBnEpMOuzd29', {action: 'submit'}).then(function(token) {
      onSubmit(token);
    });
  });
});

function onSubmit(token) {
  var mailtoLink = document.createElement('a');
  mailtoLink.href = 'mailto:heyfutureghosts@gmail.com';
  mailtoLink.click();
}