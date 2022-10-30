// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.querySelector("select");
  horn.addEventListener("change", (event) => {
    if(horn.value == "air-horn")
    {
      document.querySelector("img").src = "assets/images/air-horn.svg";
      document.getElementsByClassName("hidden")[0].src = "assets/audio/air-horn.mp3";
    }
    else if(horn.value == "car-horn")
    {
      document.querySelector("img").src = "assets/images/car-horn.svg";
      document.getElementsByClassName("hidden")[0].src = "assets/audio/car-horn.mp3";
    }
    else if(horn.value == "party-horn")
    {
      document.querySelectro("img").src = "assets/images/party-horn.svg";
      document.getElementsByClassName("hidden")[0].src = "assets/audio/party-horn.mp3";
    }
  });

  const vol = document.getElementById("volume-controls");
  vol.addEventListener("input", (event) => {
    if(vol.value == 0)
    {
      vol.src = "./icons/volume-level-0.svg";
    }
    else if(vol.value < 33)
    {
      vol.src = "./icons/volume-level-1.svg";
    }
    else if (vol.value < 67)
    {
      vol.src = "./icons/volume-level-2.svg";
    }
    else
    {
      volume.src = "./icons/volume-level-3.svg";
    }
    volume.volume = volume.value/100;
  });
  
}
