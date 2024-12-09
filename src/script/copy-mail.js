document.addEventListener("DOMContentLoaded", () => {
    const copyMailElement = document.querySelector(".copy-mail");
    const alertBox = document.getElementById("custom-alert");
    const copiedEmailSpan = document.getElementById("copied-email");
    const closeButton = document.getElementById("close-alert");
  
    copyMailElement.addEventListener("click", (e) => {
      e.preventDefault();
  
      const email = copyMailElement.getAttribute("data-email");
      navigator.clipboard.writeText(email); // Copia o texto para a área de transferência
  
      // Exibe o alerta estilizado
      copiedEmailSpan.textContent = email;
      alertBox.classList.add("visible");
  
      // Oculta o alerta após 3 segundos
      setTimeout(() => {
        alertBox.classList.remove("visible");
      }, 1500);
    });
  
    // Fechar o alerta manualmente
    closeButton.addEventListener("click", () => {
      alertBox.classList.remove("visible");
    });
  });
  