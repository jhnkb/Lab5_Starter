// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateVoiceList();
  

  //apparently tells browser that when voices finish loading, "run this function"
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const voiceSelector = document.getElementById("voice-select");
  const talkButton = document.querySelector("#explore button");
  const textEntryBox = document.getElementById("text-to-speak");
  const headImage = document.querySelector("#explore img")


  talkButton.addEventListener("click", (event) => {
    const textContent = textEntryBox.value;
    const utterance = new SpeechSynthesisUtterance(textContent);
    const voices = speechSynthesis.getVoices();

    utterance.voice = voices[voiceSelector.value];
    speechSynthesis.speak(utterance);

    utterance.onstart = () => {
      headImage.src = "assets/images/smiling-open.png"
    };

    utterance.onend = () => {
      headImage.src = "assets/images/smiling.png"
    };

  });
}



function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (const [i,voice] of voices.entries()) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = i

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    document.getElementById("voice-select").appendChild(option);
  }
}

