// Initialize the map and set its view to a chosen geographical point and zoom
// [Latitude, Longitude], Zoom Level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (the map images). We use OpenStreetMap.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker at a specific location
var marker = L.marker([51.5, -0.09]).addTo(map);

// Add a popup to that marker
marker.bindPopup("<b>Hello World!</b><br>This is a custom popup.").openPopup();

// Create a blank popup
var popup = L.popup();

// Function to handle clicks
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

// Tell the map to listen for clicks
map.on('click', onMapClick);