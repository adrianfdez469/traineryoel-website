document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

  // Obtener los valores del formulario
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Construir el mensaje para WhatsApp
  let whatsappMessage = `Hola Yoel, soy ${name}.`;
  if (email) {
      whatsappMessage += ` Mi correo es ${email}.`;
  }
  whatsappMessage += ` Te escribo porque: ${message}`;

  // Codificar el mensaje para que sea válido en una URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Número de WhatsApp de Yoel (reemplaza con el número real)
  const whatsappNumber = "5354140661"; 

  // Crear el enlace de WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Redirigir al usuario a WhatsApp
  window.open(whatsappUrl, "_blank");
});