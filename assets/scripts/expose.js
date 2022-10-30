// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.querySelector("select");
  horn.addEventListener("change", (event) => {
    if(horn.value == "air-horn")
    {
      document.querySelector("img").src = "assets/images/air-horn.svg";
      document.querySelector("audio").src = "assets/audio/air-horn.mp3";
    }
    else if(horn.value == "car-horn")
    {
      document.querySelector("img").src = "assets/images/car-horn.svg";
      document.querySelector("audio").src = "assets/audio/car-horn.mp3";
    }
    else if(horn.value == "party-horn")
    {
      document.querySelector("img").src = "assets/images/party-horn.svg";
      document.querySelector("audio").src = "assets/audio/party-horn.mp3";
    }
  });

  const vol = document.getElementById("volume");
  vol.addEventListener("input", (event) => {
    if(vol.value == 0)
    {
      document.getElementById("volume-controls").querySelector("img").src = "assets/icons/volume-level-0.svg";
    }
    else if(vol.value < 33)
    {
      document.getElementById("volume-controls").querySelector("img").src = "assets/icons/volume-level-1.svg";
    }
    else if (vol.value < 67)
    {
      document.getElementById("volume-controls").querySelector("img").src = "assets/icons/volume-level-2.svg";
    }
    else
    {
      document.getElementById("volume-controls").querySelector("img").src = "assets/icons/volume-level-3.svg";
    }
    vol.volume = (vol.value)/100;
  });
 
  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    document.querySelector("audio").play();
  }); 
}
