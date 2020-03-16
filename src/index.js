const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoiaXNyYWtoYW4iLCJhIjoiY2s3dW8yZDQ1MDBuaDNkczNtMTA2dDF6ZSJ9.mt3dNwpqf5gi_7nJyzLvmg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity", [-87.641, 41.895]);
marker.addTo(map);
