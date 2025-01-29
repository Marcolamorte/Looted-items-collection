// Script for making the modal container work and open the full image of the graph properly -->
    // References to modal elements
    const modal       = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");
    const modalContent = document.querySelector(".modal-content");
    
    // Variables for zoom and pan
    let scale = 1;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let translateX = 0;
    let translateY = 0;
    
    // Open the modal with the given `src`
    function openModal(src) {
        // Set the enlarged image src to the one clicked
        expandedImg.src = src;
        
        // Reset scale and translation each time
        scale = 1;
        translateX = 0;
        translateY = 0;
        applyTransform();
    
        // Show the modal
        modal.style.display = "block";
    }
    
    // Close the modal
    function closeModal() {
        modal.style.display = "none";
    }
    
    // Apply the current scale/translate values
    function applyTransform() {
        expandedImg.style.transform = `
            translate(-50%, -50%)
            translate(${translateX}px, ${translateY}px)
            scale(${scale})
        `;}
    
    // Handle mouse wheel (zoom)
    expandedImg.addEventListener('wheel', (e) => {
        e.preventDefault(); // Avoid entire page scroll
    
        // You can tweak the zoom factor (0.001) to taste
        scale -= e.deltaY * 0.001;
        
        // Limit scale range to avoid infinite zoom
        if (scale < 0.2) scale = 0.2;
        if (scale > 10) scale = 10;
    
        applyTransform();
    });
    
    // Handle mouse down (start dragging)
    expandedImg.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        // Record initial mouse position minus current translate
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
    });
    
    // Handle mouse move (panning)
    expandedImg.addEventListener('mousemove', (e) => {
        if (!isDragging) return; 
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        applyTransform();
    });
    
    // Stop dragging on mouse up or leaving the image area
    expandedImg.addEventListener('mouseup', () => {
        isDragging = false;
    });
    expandedImg.addEventListener('mouseleave', () => {
        isDragging = false;
    });
    
    // Expose openModal / closeModal globally if needed
    window.openModal = openModal;
    window.closeModal = closeModal;

// Variabili per gestire il touch
let isTouchDragging = false;
let touchStartX = 0;
let touchStartY = 0;

// Gestione di touchstart (inizio del tocco)
expandedImg.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isTouchDragging = true;

    // Registra la posizione iniziale del tocco
    const touch = e.touches[0];
    touchStartX = touch.clientX - translateX;
    touchStartY = touch.clientY - translateY;

    modalContent.style.cursor = 'grabbing';
});

// Gestione di touchmove (movimento del tocco)
expandedImg.addEventListener('touchmove', (e) => {
    if (!isTouchDragging) return;

    e.preventDefault();

    // Ottieni la posizione corrente del tocco
    const touch = e.touches[0];
    translateX = touch.clientX - touchStartX;
    translateY = touch.clientY - touchStartY;

    applyTransform();
});

// Gestione di touchend (fine del tocco)
expandedImg.addEventListener('touchend', () => {
    isTouchDragging = false;
    modalContent.style.cursor = 'grab';
});

// Ensure all images trigger the modal when clicked
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", function() {
            openModal(this.src);
        });
    });
});

