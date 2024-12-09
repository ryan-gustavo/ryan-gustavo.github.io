document.addEventListener("DOMContentLoaded", function() {
  // Obtém o seletor de idiomas e o elemento de texto para mostrar o idioma atual
  const languageSelector = document.querySelector('.language-selector');
  const selectedLanguageText = document.getElementById('selected-language');
  const dropdown = document.querySelector('.language-dropdown');

  // Adiciona um evento de clique na lista do dropdown
  languageSelector.addEventListener('click', function(e) {
    let target = e.target;

    // Verifica se o clique foi em um elemento filho (como a <img>) e então busca o <li> pai
    if (target.tagName.toLowerCase() !== 'li') {
      target = target.closest('li'); // Encontrar o <li> mais próximo
    }

    // Verifica se realmente é um <li> com o atributo data-language
    if (target && target.tagName.toLowerCase() === 'li') {
      const language = target.getAttribute('data-language');
      
      // Atualiza o texto de idioma selecionado
      if (language === 'pt-br') {
        selectedLanguageText.textContent = 'PT-BR'; // Mostra 'PT-BR'
        window.location.href = ''; // Redireciona para o português
      } else if (language === 'en') {
        selectedLanguageText.textContent = 'EN'; // Mostra 'EN'
        window.location.href = 'en'; // Redireciona para o inglês
      }
      else if (language === 'es') {
        selectedLanguageText.textContent = 'ES'; // Mostra 'ES'
        window.location.href = 'es'; // Redireciona para o espanhol
      }

      // Fecha o dropdown após a seleção
      dropdown.classList.remove('open');
    }
  });

  // Toggle de visibilidade do dropdown
  languageSelector.addEventListener('click', function() {
    dropdown.classList.toggle('open');
  });
});
