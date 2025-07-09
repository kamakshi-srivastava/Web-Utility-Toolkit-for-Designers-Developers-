// js/lorem.js

const tagOptions = ["p", "h1", "h2", "h3", "h4", "span"];
const tagsSelect = document.getElementById("tags");
const paragraphsSlider = document.getElementById("paragraphs");
const wordsSlider = document.getElementById("words");
const paragraphsValue = document.getElementById("paragraphsValue");
const wordsValue = document.getElementById("wordsValue");
const output = document.querySelector(".output");

function init() {
  tagOptions.forEach(tag => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = `<${tag}>`;
    tagsSelect.appendChild(option);
  });

  paragraphsSlider.addEventListener("input", () => {
    paragraphsValue.textContent = paragraphsSlider.value;
  });

  wordsSlider.addEventListener("input", () => {
    wordsValue.textContent = wordsSlider.value;
  });

  document.getElementById("generate").addEventListener("click", generateText);
}

function generateText() {
  const paragraphs = parseInt(paragraphsSlider.value);
  const wordsPerParagraph = parseInt(wordsSlider.value);
  const tag = tagsSelect.value;
  const includeHtml = document.getElementById("include").value === "Yes";

  const lorem = `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  const words = lorem.split(" ");
  let result = "";

  for (let i = 0; i < paragraphs; i++) {
    const sentence = Array(wordsPerParagraph)
      .fill()
      .map(() => words[Math.floor(Math.random() * words.length)])
      .join(" ");

    result += includeHtml
      ? `<${tag}>${sentence}</${tag}>\n`
      : `${sentence}\n\n`;
  }

  output.innerHTML = result;
}

init();
