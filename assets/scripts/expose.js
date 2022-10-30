// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  // display image by input horns types
  const selectedHorn = document.getElementById("horn-select");
  const audio = document.querySelector("audio");
  const hornImg = document.querySelector("img");
  selectedHorn.addEventListener("input", (event) => {
    if (selectedHorn.value != "select"){
      hornImg.src = "assets/images/" + selectedHorn.value + ".svg";
      audio.src = "assets/audio/" + selectedHorn.value + ".mp3";
    }
  });
  // display different volume icon by slide bar
  const volumeCtl = document.getElementById("volume");
  // volume icon = second img element 
  const volumeIcon = document.querySelectorAll("img")[1];
  volumeCtl.addEventListener("change", (event) => {
    var volume = Number(volumeCtl.value);
    var audioVol = volume * 0.01; 
    audio.volume = audioVol;
    if (volume == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume >= 1 && volume < 33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume >= 33 && volume < 67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }
    // volume > 67
    else{
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  // play sound when btn is clicked
  const audioBtn = document.querySelector("button");
  audioBtn.addEventListener("click", (event) => {
    audio.play();
    if (selectedHorn.value == "party-horn"){
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      })     
    }
  });
}
