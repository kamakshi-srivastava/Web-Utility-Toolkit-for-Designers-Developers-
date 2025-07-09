// js/tts.js

const textBox = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
const errorMsg = document.getElementById("errorMsg");

convertBtn.addEventListener("click", () => {
  const text = textBox.value.trim();
  if (text === "") {
    errorMsg.textContent = "⚠️ Please enter some text first!";
    return;
  } else {
    errorMsg.textContent = ""; // Clear error
  }

  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
});
