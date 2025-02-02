const navbar = document.querySelector('nav');

let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  // if (window.innerWidth <= 875) {
    
  //   navbar.classList.remove('hidden');
  //   return;
  // }


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

  
  nav.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
      menuToggle.checked = false;

    
    const allElements = Array.from(body.children);
    allElements.forEach(element => {
        if (element !== header) {
            element.classList.remove('blurred');
        }
    });


  }, 500);
  });

 
  nav.addEventListener('mouseenter', () => {
  if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
  }
  });

const hamburger = document.querySelector('.hamburger');
 const body = document.body;
const header = document.querySelector('header'); 
      
    hamburger.addEventListener('click', () => {
        const allElements = Array.from(body.children); 
        allElements.forEach(element => {
            if (element !== header) {
                element.classList.toggle('blurred'); 
            }
        });
    });

      const scrollToTopButton = document.getElementById('scroll-to-top');


      window.addEventListener('scroll', () => {
          if (window.scrollY > 200) { 
              scrollToTopButton.style.display = 'flex';
          } else {
              scrollToTopButton.style.display = 'none';
          }
      });
  
      
      scrollToTopButton.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth' 
          });
      });
  


