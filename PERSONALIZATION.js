function startTour(tourName) {
    const length = document.querySelector(`#${tourName} select[name="tour-length"]`).value;
    const complexity = document.querySelector(`#${tourName} select[name="tour-complexity"]`).value;

    if (!length || !complexity) {
        alert('Please select both length and complexity to start the tour.');
        return false;
    }

    // Redirect with query parameters
    const url = `Object-page.html?tour=${encodeURIComponent(tourName)}&length=${encodeURIComponent(length)}&complexity=${encodeURIComponent(complexity)}`;
    window.location.href = url;
}