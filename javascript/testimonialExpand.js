document.querySelectorAll(".read-more").forEach(function (button) {
  button.addEventListener("click", function () {
      const testimonialContent = this.parentElement;
      const shortText = testimonialContent.querySelector(".short-text");
      const fullText = testimonialContent.querySelector(".full-text");

      if (fullText.style.display === "none") {
          shortText.style.display = "none";
          fullText.style.display = "block";
          this.textContent = "Leer menos";
      } else {
          shortText.style.display = "block";
          fullText.style.display = "none";
          this.textContent = "Leer más";
      }
  });
});