// Initialize the map with custom options
var map = L.map('map', {
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
    maxBounds: [[-90, -180], [90, 180]],
    maxBoundsViscosity: 1.0,
    worldCopyJump: false,
    scrollWheelZoom: false,  // Disable scroll wheel zoom
    touchZoom: false,        // Disable touch zoom
    attributionControl: false,
    zoomControl: false

}).setView([0, 0], 2);

// Set the background color of the map container
map.getContainer().style.backgroundColor = '#0C0C0F';

// Load GeoJSON data
fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function(feature) {
                return {
                    fillColor: '#0C0C0F',
                    fillOpacity: 1,
                    color: '#CFCCD6',
                    weight: 1,
                    opacity: 1
                };
            }
        }).addTo(map);
    });

// Custom icon for markers
var customIcon = L.divIcon({
    className: 'custom-pin',
    html: '<div class="pin"></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 30]
});

// Object data with locations and names
var objects = [
    { name: "Benin Bronzes", location: "Benin City, Nigeria", coords: [6.3392, 5.6173] },
    { name: "Koh-i-Noor Diamond", location: "Golconda, India", coords: [17.3850, 78.4867] },
    { name: "Old Summer Palace Artifacts", location: "Beijing, China", coords: [39.9042, 116.4074] },
    { name: "The Sultanganj Buddha", location: "Sultanganj, India", coords: [25.2468, 86.7365] },
    { name: "The Parthenon Marbles", location: "Athens, Greece", coords: [37.9715, 23.7267] },
    { name: "Gdansk Astronomical Clock", location: "Gdansk, Poland", coords: [54.3520, 18.6466] },
    { name: "Moai Statue", location: "Easter Island, Chile", coords: [-27.1127, -109.3497] },
    { name: "The Throne of King Glele", location: "Abomey, Benin", coords: [7.1826, 1.9912] },
    { name: "Machu Picchu Artifacts", location: "Machu Picchu, Peru", coords: [-13.1631, -72.5450] },
    { name: "Nok Terracotta Statues", location: "Kaduna State, Nigeria", coords: [10.5105, 7.4165] },
    { name: "The Achaemenid Reliefs", location: "Persepolis, Iran", coords: [29.9359, 52.8916] },
    { name: "The Bust of Nefertiti", location: "Amarna, Egypt", coords: [27.6474, 30.9021] },
    { name: "The Altar of Pergamon", location: "Pergamon (Bergama), Turkey", coords: [39.1202, 27.1833] },
    { name: "Tipu Sultan's Tiger", location: "Srirangapatna, India", coords: [12.4181, 76.6947] },
    { name: "Mask of Queen Idia", location: "Benin City, Nigeria", coords: [6.3392, 5.6173] }
];

// Get the computed style of p elements
var pStyle = window.getComputedStyle(document.querySelector('p'));

// Add markers for each object
objects.forEach(function(object) {
    var marker = L.marker(object.coords, {icon: customIcon}).addTo(map);
    
    // Create a custom popup with styled content
    var popupContent = L.popup({
        closeButton: false,
        className: 'custom-popup'
    }).setContent(`<div style="font-family: ${pStyle.fontFamily}; font-size: ${pStyle.fontSize}; line-height: ${pStyle.lineHeight};"><strong>${object.name}</strong><br>${object.location}</div>`);
    
    // Bind the popup to the marker
    marker.bindPopup(popupContent);
    
    // Add hover behavior to display popup on hover
    marker.on('mouseover', function(e) {
        this.openPopup();
    });
    
    marker.on('mouseout', function(e) {
        this.closePopup();
    });
});
