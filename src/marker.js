const mapbox = require("mapbox-gl");

function buildMarker (type, coord) {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if (type === "hotel") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else if (type === "activity") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if (type === "restaurant") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  return new mapbox.Marker(markerDomEl).setLngLat(coord);
}


module.exports = buildMarker;
