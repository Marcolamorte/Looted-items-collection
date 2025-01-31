document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault(); // Evita il redirect di default
            const selectedItem = this.getAttribute("data-item");
            
            // Salva l'oggetto selezionato nel localStorage
            localStorage.setItem("selectedItem", selectedItem);
            
            // Redirect alla mappa
            window.location.href = "map_page.html";
        });
    });
});
