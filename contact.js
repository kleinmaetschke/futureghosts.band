function onSubmit(token) {
  const email = "heyfutureghosts@gmail.com";
  document.getElementById("contact-link").href = `mailto:${email}`;
  document.getElementById("contact-link").click();
}

document
  .getElementById("contact-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    grecaptcha.execute().catch(function (error) {
      console.error("Error executing reCAPTCHA:", error);
    });
  });