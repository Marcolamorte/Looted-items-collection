// Initialize the map with custom options
var map = L.map('map', {
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
    maxBounds: [[-90, -180], [90, 180]],
    maxBoundsViscosity: 1.0,
    worldCopyJump: false,
    scrollWheelZoom: true,
    touchZoom: true,
    attributionControl: false,
    zoomControl: false,
}).setView([0, 0], 2);

// Function to update map styles
function updateMapStyles(isLightMode) {
    var backgroundColor = isLightMode ? '#F0F0F5' : '#0C0C0F';
    var borderColor = isLightMode ? '#7A7A7A' : '#CFCCD6';
    var markerColor = isLightMode ? '#5D5D8D' : '#B7B5E4';

    map.getContainer().style.backgroundColor = backgroundColor;

    map.eachLayer(function(layer) {
        if (layer instanceof L.GeoJSON) {
            layer.setStyle({
                fillColor: backgroundColor,
                fillOpacity: 1,
                color: borderColor,
                weight: 1,
                opacity: 1
            });
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(L.divIcon({
                className: 'custom-pin',
                html: `<div class="pin" style="background-color: ${markerColor};"></div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 30]
            }));
        }
    });
}



// Load GeoJSON data
fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);
        updateMapStyles(false); // Initial dark mode
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

// Add markers for each object
objects.forEach(function(object) {
    var marker = L.marker(object.coords, {icon: customIcon}).addTo(map);
    
    var popupContent = L.popup({
        closeButton: false,
        className: 'custom-popup',
        offset: L.point(-7, -15)
    }).setContent(`<div><strong>${object.name}</strong><br>${object.location}</div>`);
    
    marker.bindPopup(popupContent);
    
    
    marker.on('mouseover', function(e) {
        console.log('mouseover su', object.name);
        this.openPopup();
    });
    marker.on('mouseout', function(e) {
        console.log('mouseout su', object.name);
        this.closePopup();
    });


   
    
    // marker.on('mouseenter', function(e) {
    //     this.openPopup();
    // });
    
    // marker.on('mouseleave', function(e) {
    //     this.closePopup();
    // });
});



// Theme toggle event listener
const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        // Light mode
        updateMapStyles(true);
        document.documentElement.style.setProperty('--primary-color', '#5D5D8D');
        document.documentElement.style.setProperty('--secondary-color', '#7A7A7A');
        document.documentElement.style.setProperty('--background-color', '#F0F0F5');
        document.documentElement.style.setProperty('--accent1-color', '#8D8DA6');
        document.documentElement.style.setProperty('--accent2-color', '#B0B0C0');
    } else {
        // Dark mode
        updateMapStyles(false);
        document.documentElement.style.setProperty('--primary-color', '#B7B5E4');
        document.documentElement.style.setProperty('--secondary-color', '#847979');
        document.documentElement.style.setProperty('--background-color', '#0C0C0F');
        document.documentElement.style.setProperty('--accent1-color', '#BBC2E2');
        document.documentElement.style.setProperty('--accent2-color', '#CFCCD6');
    }
});
