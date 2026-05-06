// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById('horn-select');
  const selectedImage = document.querySelector('#expose img');
  const selectedAudio = document.querySelector('#expose audio');
  const playButton = document.querySelector('#expose button');
  const volumeControl = document.getElementById('volume');
  const volumeLevelImage = document.querySelectorAll('#expose img')[1];
  const jsConfetti = new JSConfetti();

  
  selectHorn.addEventListener("change", (event) => {
    const value = event.target.value;

    if (value == "air-horn") {
      selectedImage.src = "assets/images/air-horn.svg";
      selectedAudio.src = "assets/audio/air-horn.mp3";
    }
    else if (value == "car-horn") {
      selectedImage.src = "assets/images/car-horn.svg";
      selectedAudio.src = "assets/audio/car-horn.mp3";
    }
    else if (value == "party-horn") {
      selectedImage.src = "assets/images/party-horn.svg";
      selectedAudio.src = "assets/audio/party-horn.mp3";
    }
  });

  playButton.addEventListener("click", (event) => {
    selectedAudio.play();

    if (selectHorn.value == "party-horn"){
      jsConfetti.addConfetti();
    }

  });

  volumeControl.addEventListener("input", (event) => {
    const volume_normalized = volumeControl.value / 100;
    selectedAudio.volume = volume_normalized;

    if (volume_normalized == 0) {
      volumeLevelImage.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume_normalized >= 0.01 && volume_normalized < 0.33) {
      volumeLevelImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume_normalized >= 0.33 && volume_normalized < 0.67) {
      volumeLevelImage.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeLevelImage.src = "assets/icons/volume-level-3.svg";
    }
  });

}