// Initialize the map and set its view to a chosen geographical point and zoom
// [Latitude, Longitude], Zoom Level
var map = L.map('map').setView([54.597, -5.930], 15);

// Add a tile layer (the map images). We use OpenStreetMap. Changed to "Humanitarian Style".
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Humanitarian OpenStreetMap Team'
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

var circle = L.circle([54.597, -5.930], {
    color: 'red',       // The color of the border
    fillColor: '#f03',  // The color of the inside
    fillOpacity: 0.5,   // How see-through it is (0 to 1)
    radius: 1000         // Radius in meters
}).addTo(map);

circle.bindPopup("I am a 500 meter circle centered on Belfast.");

var polygon = L.polygon([
    [54.600, -5.935],
    [54.605, -5.930],
    [54.600, -5.925],
], {color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
    }
).addTo(map);

polygon.bindPopup("I am a polygon (triangle).");

// Put your features into a group
var myFeatures = L.layerGroup([marker, circle, polygon]);

// Create an object to name the group in the menu
var overlayMaps = {
    "My Interesting Places": myFeatures
};

// Add the control to the map
L.control.layers(null, overlayMaps).addTo(map);