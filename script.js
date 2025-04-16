

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messageDiv = document.createElement("div");
    messageDiv.id = "responseMessage";
    messageDiv.style.marginTop = "20px";
    messageDiv.style.fontWeight = "bold";
    messageDiv.style.color = "green";
  
    form.parentNode.appendChild(messageDiv);
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      form.reset();
  
      messageDiv.textContent = "We will contact you soon!";
    });
  });
  