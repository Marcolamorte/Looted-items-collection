// Funzione per gestire il click sui bottoni dei tour
function startTour(tourName) {
    // Valori di default per length e complexity
    let length = "short";
    let complexity = "fun";

    // Log dei valori selezionati
    console.log(`Starting tour: ${tourName} with length: ${length} and complexity: ${complexity}`);

    // Salvataggio dei dati del tour in localStorage
    const tourData = { tourName, length, complexity };
    localStorage.setItem('tourData', JSON.stringify(tourData));

    console.log('Tour data saved:', tourData);

    // Reindirizzamento alla pagina del tour
    window.location.href = "Object-page.html";
}

// Rendi la funzione disponibile globalmente
window.startTour = startTour;