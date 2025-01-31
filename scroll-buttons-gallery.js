    const galleryContent = document.querySelector('.gallery-content'); // .gallery-content: Selects the <div> element with the class gallery-content. This is the container that holds the gallery boxes and will be scrolled.
    const scrollLeftButton = document.querySelector('.scroll-left'); // scroll-left : Select the left  button, which allow the user to scroll the gallery content.
    const scrollRightButton = document.querySelector('.scroll-right');// scroll-right: Select the  right button, which allow the user to scroll the gallery content.
    const scrollAmount = 300; // This variable defines how far the gallery will scroll when one of the buttons is clicked=> he gallery will scroll 300 pixels left or right each time the button is clicked.
    
    // When the left scroll button (←) is clicked, the scrollLeft property of the galleryContent is decreased by scrollAmount (i.e., 300px).
    scrollLeftButton.addEventListener('click', () => {  // addEventListener('click', ...): This attaches a "click" event to each button (scroll-left and scroll-right). When the button is clicked, the function inside the addEventListener is executed.
        galleryContent.scrollLeft -= scrollAmount; // This line tells the browser to move the .gallery-content container 300px to the left.              
    });

    scrollRightButton.addEventListener('click', () => { // When the right scroll button (→) is clicked, the scrollLeft property of the galleryContent is increased by scrollAmount (i.e., 300px).
        galleryContent.scrollLeft += scrollAmount;  // This line tells the browser to move the .gallery-content container 300px to the right.
    });