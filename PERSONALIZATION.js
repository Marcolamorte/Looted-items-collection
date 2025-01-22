
// function named startTour that takes one parameter, tourName. 
// This parameter represents the name of the tour being started.
// tourLength determines and returns the ID of an HTML element based on the tourName value.
//Similar to tourLength, tourComplexity determines and returns the ID of an HTML element based 
// on the tourName value

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


//Retrieves the values of the HTML elements whose IDs are determined by calling the 
// tourLength and tourComplexity functions.
//length stores the value of the element related to the tour's length.
//complexity stores the value of the element related to the tour's complexity.

    
    const length = document.getElementById(tourLength()).value;
    const complexity = document.getElementById(tourComplexity()).value;


//Logs the retrieved values of length and complexity to the console.

    console.log(`length: ${length}, complexity: ${complexity}`);

    if (!length || !complexity) {
        alert('Please select both length and complexity to start the tour.');
        return false;
    }
    console.log(`length: ${length}, complexity: ${complexity}`);




    console.log('starting tour')
    const tourData = { tourName: tourName, length, complexity };
    localStorage.setItem('tourData', JSON.stringify(tourData));

    console.log('Tour data saved:', tourData);

    console.log("Start tour from js");
}

document.addEventListener('DOMContentLoaded', function () {
    const tourSections = document.querySelectorAll('.tour-section');

    tourSections.forEach(section => {
        const button = section.querySelector('.expand-button');
        const content = section.querySelector('.expandable-content');

        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // First, close all other expanded sections
            tourSections.forEach(otherSection => {
                if (otherSection !== section) {
                    const otherContent = otherSection.querySelector('.expandable-content');
                    const otherButton = otherSection.querySelector('.expand-button');
                    otherContent.classList.remove('expanded');
                    otherButton.setAttribute('aria-expanded', 'false');
                }
            });

            // Then toggle the clicked section
            const expanded = button.getAttribute('aria-expanded') === 'true';
            content.classList.toggle('expanded');
            button.setAttribute('aria-expanded', !expanded);
        });
    });
});

//Without this line, startTour would only be accessible within the script file where it's defined.
//Adding it to the window object allows other parts of the application to invoke it.

window.startTour = startTour;