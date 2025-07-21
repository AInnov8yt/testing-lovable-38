document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("changeTextBtn");
  const text = document.getElementById("text");

  button.addEventListener("click", function() {
    text.textContent = "The text has been changed!";
  });
});