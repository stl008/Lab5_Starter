// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = windonw.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  let voices = synth.getVoices();
  for(let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name}(${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }

  voiceSelect.addEventListener("change", (event) => {
    synth.voice = voiceSelect.name;
  });
  
  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak"));
    synth.speak(utterThis);
    
    if(synth.speaking) {
      document.querySelector("img").src = "assets/images/smiling-open.png";
    }
  });

  if(synth.speaking == false) {
    document.querySelector("img").src = "assets/images/smiling.png";
  }
}
