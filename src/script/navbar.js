const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const currentLanguage = document.querySelector(".current-language");
  const dropdown = document.querySelector(".language-dropdown");
  const selectedLanguage = document.getElementById("selected-language");

  currentLanguage.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });

  dropdown.addEventListener("click", (e) => {
    const target = e.target.closest("li[data-language]");
    if (target) {
      const language = target.dataset.language;
      const languageText = target.querySelector("span").textContent;

      // Update the selected language
      selectedLanguage.textContent = languageText;

      // Hide the dropdown
      dropdown.classList.add("hidden");

      // Perform any language-switching logic here
      console.log(`Language switched to: ${language}`);
    }
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!currentLanguage.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });
});
