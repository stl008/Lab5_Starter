// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let horn = document.querySelector("select");
  if(horn.value == "air-horn")
  {
    document.querySelector("img").src = "air-horn.svg";
    document.getElementsByClassName("hidden")[0].src = "air-horn.mp3";
  }
  else if(horn.value == "car-horn")
  {
    document.querySelector("img").src = "car-horn.svg";
    document.getElementsByClassName("hidden")[0].src = "car-horn.mp3";
  }
  else if(horn.value == "party-horn")
  {
    document.querySelectro("img").src = "party-horn.svg";
    document.getElementsByClassName("hidden")[0].src = "party-horn.mp3";
  }

  let volume = document.getElementById("volume-controls");
  if(volume.value == 0)
  {
    volume.src = "assets/icons/volume-level-0.svg";
  }
  else if(volume.value < 33)
  {
    volume.src = "assets/icons/volume-level-1.svg";
  }
  else if (volume.value < 67)
  {
    volume.src = "assets/icons/volume-level-2.svg";
  }
  else
  {
    volume.src = "assets/icons/volume-level-3.svg";
  }
  volume.volume = volume.value/100;

  
}
