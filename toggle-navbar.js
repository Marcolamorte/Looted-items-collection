const navbar = document.querySelector('nav');

let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  // Mostra la navbar solo se si è in cima alla pagina
  if (currentScrollPosition === 0) {
    navbar.classList.remove('hidden');
  } else if (currentScrollPosition > lastScrollPosition) {
    // Scroll verso il basso - nasconde la navbar
    navbar.classList.add('hidden');
  }

  // Aggiorna la posizione dello scroll
  lastScrollPosition = currentScrollPosition;
});
