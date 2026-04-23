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
    "My Interesting Places": L.layerGroup([marker, circle])
};

L.control.layers(baseMaps, overlayMaps).addTo(map);