function startTour(tourName) {
    const tourLength = () => {
        if (tourName === 'Timeline Tour') {
            return 'tour-length-1';
        }
        else if (tourName === 'Colonial Conquests Tour') {
            return 'tour-length-2';
        }
        else if (tourName === 'Geo Tour') {
            return 'tour-length-3';
        }
    }

    const tourComplexity = () => {
        if (tourName === 'Timeline Tour') {
            return 'tour-complexity-1';
        }
        else if (tourName === 'Colonial Conquests Tour') {
            return 'tour-complexity-2';
        }
        else if (tourName === 'Geo Tour') {
            return 'tour-complexity-3';
        }
    }
    
    const length = document.getElementById(tourLength()).value;
    const complexity = document.getElementById(tourComplexity()).value;

    console.log(`length: ${length}, complexity: ${complexity}`);

    if (!length || !complexity) {
        alert('Please select both length and complexity to start the tour.');
        return false;
    }
    console.log(`length: ${length}, complexity: ${complexity}`);

    // Redirect with query parameters
    // const url = `Object-page.html?tour=${encodeURIComponent(tourName)}&length=${encodeURIComponent(length)}&complexity=${encodeURIComponent(complexity)}`;
    // window.location.href = url;
    console.log('starting tour')
    const tourData = { tourName: tourName, length, complexity };
    localStorage.setItem('tourData', JSON.stringify(tourData));

    console.log('Tour data saved:', tourData);

    console.log("Start tour desde el js");
}



window.startTour = startTour;