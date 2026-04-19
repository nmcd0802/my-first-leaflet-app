// Initialize the map and set its view to a chosen geographical point and zoom
// [Latitude, Longitude], Zoom Level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (the map images). We use OpenStreetMap.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);