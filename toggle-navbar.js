const navbar = document.querySelector('nav');

let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (window.innerWidth <= 875) {
    
    navbar.classList.remove('hidden');
    return;
  }


  
  if (currentScrollPosition === 0) {
    navbar.classList.remove('hidden');
  } else if (currentScrollPosition > lastScrollPosition) {
    
    navbar.classList.add('hidden');
  }

  
  lastScrollPosition = currentScrollPosition;
});

const nav = document.querySelector('nav'); 
            const menuToggle = document.getElementById('menu-toggle');
            let hideTimeout = null;
        
            // Quando il mouse esce, avviamo un timer di 300ms (puoi variare il valore).
            nav.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                menuToggle.checked = false;
            }, 500);
            });
        
            // Se rientra prima che scada il tempo, annulliamo il timer e il menu resta aperto.
            nav.addEventListener('mouseenter', () => {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
            });