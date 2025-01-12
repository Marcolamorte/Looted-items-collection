// Function to parse URL parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        tour: params.get('tour'),        // Selected tour name
        length: params.get('length'),    // Selected text length (short, medium, long)
        complexity: params.get('complexity'), // Selected complexity (fun, basic, expert)
    };
}

// Function to load and display content
function loadTourContent() {
    const { tour, length, complexity } = getQueryParams();

    if (!tour || !length || !complexity) {
        // Handle missing parameters
        document.getElementById('item-title').textContent = 'Invalid or Missing Selection';
        document.getElementById('item-text').textContent = 'Please return to the personalization page and make a selection.';
        return;
    }

    // Fetch JSON data for the selected tour
    fetch('PROVA_JSON_ITEMS_MARCO.JSON') // Replace with the correct path to your JSON file
        .then(response => response.json())
        .then(data => {
            // Validate the selected tour
            if (!data[tour]) {
                document.getElementById('item-title').textContent = 'Tour Not Found';
                document.getElementById('item-text').textContent = 'The selected tour is not available in our data.';
                return;
            }

            // Get items and texts for the selected tour
            const tourData = data[tour];
            const items = tourData.items || [];
            const texts = tourData.texts || {};

            if (items.length === 0) {
                document.getElementById('item-title').textContent = 'No Items Found';
                document.getElementById('item-text').textContent = 'The selected tour does not have any items.';
                return;
            }

            // Display the first item
            let currentIndex = 0;

            function displayItem(index) {
                const itemId = items[index];
                const itemData = texts[itemId];
                if (!itemData) {
                    document.getElementById('item-title').textContent = 'Item Not Found';
                    document.getElementById('item-text').textContent = 'The selected item could not be retrieved.';
                    return;
                }

                // Update the title and text dynamically
                document.getElementById('item-title').textContent = itemData.title || `Item ${index + 1}`;
                const itemText = itemData[complexity]?.[length] || 'No text available for this selection.';
                document.getElementById('item-text').textContent = itemText;
            }

            // Initial display
            displayItem(currentIndex);

            // Navigation logic
            document.getElementById('prev').addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    displayItem(currentIndex);
                }
            });

            document.getElementById('next').addEventListener('click', () => {
                if (currentIndex < items.length - 1) {
                    currentIndex++;
                    displayItem(currentIndex);
                }
            });
        })
        .catch(error => {
            console.error('Error loading tour data:', error);
            document.getElementById('item-title').textContent = 'Error Loading Data';
            document.getElementById('item-text').textContent = 'There was an error retrieving the tour data. Please try again later.';
        });
}

// Run the script when the page loads
window.onload = loadTourContent;