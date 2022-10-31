// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  let voices = [];
  voices = synth.getVoices();
  for(let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name}(${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
  
  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);

    if(synth.speaking) {
      document.querySelector("img").src = "assets/images/smiling-open.png";
    }
    
    while(synth.speaking == false) {
      document.querySelector("img").src = "assets/images/smiling.png";
    }

    
  });
}
