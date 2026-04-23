// Initialize the map and set its view to a chosen geographical point and zoom
// [Latitude, Longitude], Zoom Level
var map = L.map('map').setView([54.597, -5.930], 15);

// Add a tile layer (the map images). We use OpenStreetMap.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker at a specific location
var marker = L.marker([54.5965, -5.9301]).addTo(map);

// Add a popup to that marker
marker.bindPopup("<b>Belfast City Hall</b><br>The heart of the city.").openPopup();

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