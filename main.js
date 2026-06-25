var typed = new Typed(".text", {
    strings: ["Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const statusMsg = document.getElementById("statusMsg");
  statusMsg.style.display = "block";
  statusMsg.textContent = "Sending...";

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    title: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send(
      "service_3kc049t",
      "template_2n9a5e5",
      templateParams
    )
    .then(function () {
      statusMsg.style.color = "cyan";
      statusMsg.textContent = "✅ Message sent successfully!";
      document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
      statusMsg.style.color = "red";
      statusMsg.textContent = "❌ Failed to send. Try again.";
      console.error("EmailJS Error:", error);
    });
});