// 1. Define the background layers first
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri'
});

// 2. Initialize the map using one of those layers
var map = L.map('map', {
    center: [54.597, -5.930],
    zoom: 13,
    layers: [osm] // Default layer
});

// 3. Add your shapes and markers
var marker = L.marker([54.5965, -5.9301]).addTo(map);
marker.bindPopup("<b>Belfast City Hall</b>");

// Add a marker for QUB Lanyon Building
var qubMarker = L.marker([54.5847, -5.9348]).addTo(map);
qubMarker.bindPopup("<b>QUB Lanyon Building</b><br>Designed by Sir Charles Lanyon.");

var circle = L.circle([54.597, -5.930], {
    color: 'red',
    radius: 1000
}).addTo(map);

// 4. Setup the Layer Control
var baseMaps = {
    "Street Map": osm,
    "Satellite": satellite
};

var overlayMaps = {
    "My Interesting Places": L.layerGroup([marker, circle, qubMarker])
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

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