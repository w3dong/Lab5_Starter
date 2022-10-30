// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
const voiceSelect = document.querySelector('select');
const input = document.querySelector('textarea');
const submitBtn = document.querySelector('button');
let voices = [];

function init() {
  // TODO
  voices = synth.getVoices();
  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    document.querySelector('img').src = "assets/images/smiling-open.png";
    synth.speak(utterThis);
    utterThis.addEventListener('end', (event) => {
      document.querySelector('img').src = "assets/images/smiling.png";
    });
    input.blur();
  });
}

