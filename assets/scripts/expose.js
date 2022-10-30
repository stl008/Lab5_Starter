// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.querySelector("horn-select");
  if(horn.value == "air-horn")
  {
    document.getElementById("expose").src = "air-horn.svg";
    document.querySelector("hidden").src = "air-horn.mp3";
  }
  if(horn.value == "car-horn")
  {
    document.getElementById("expose").src = "car-horn.svg";
    document.querySelector("hidden").src = "car-horn.mp3";
  }
  if(horn.value == "party-horn")
  {
    document.getElementById("expose").src = "party-horn.svg";
    document.querySelector("hidden").src = "party-horn.mp3";
  }

  
}
