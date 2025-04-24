(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "scs3tpWwkIMmFiPIZ",
  });
})();

const msg = document.querySelector(".form-message");

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_zhog9kg', 'template_h4uv46s', this).then(
        function() {
          document.getElementById("contact-form").reset();
          msg.innerHTML += "<span class='success-msg'>Sent!</span>"
          msg.classList.add("show");
          setTimeout(() => msg.classList.remove("show"), 2000);
        },
        (error) => {
        console.log('FAILED...', error);
        }
      );
  });
}