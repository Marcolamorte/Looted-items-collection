document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault(); 
            const selectedItem = this.getAttribute("data-item");
            
            
            localStorage.setItem("selectedTour", "Timeline Tour");
            localStorage.setItem("selectedItem", selectedItem);

            
            console.log("Oggetto selezionato:", selectedItem);
            console.log("Tour selezionato:", localStorage.getItem("selectedTour"));
            console.log("Oggetto salvato in localStorage:", localStorage.getItem("selectedItem"));

           window.location.href = "map_page.html";

        });
    });
});
