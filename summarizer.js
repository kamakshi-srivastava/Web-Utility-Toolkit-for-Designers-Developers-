function summarizeText() {
    const text = document.getElementById("inputText").value;
    const summaryBox = document.getElementById("summary");
    const keywordList = document.getElementById("keywords");
    const wordList = document.getElementById("wordFrequency");
  
    if (!text.trim()) {
      summaryBox.innerText = "⚠️ Please enter some text.";
      keywordList.innerHTML = "";
      wordList.innerHTML = "";
      return;
    }
  
    const sentences = text.match(/[^.!?]+[.!?\n]?/g) || [];
    const words = text.toLowerCase().match(/\b\w{4,}\b/g) || [];
  
    const frequency = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
  
    const ranked = sentences.map(sentence => {
      let score = 0;
      for (let word in frequency) {
        if (sentence.toLowerCase().includes(word)) {
          score += frequency[word];
        }
      }
      return { sentence, score };
    }).sort((a, b) => b.score - a.score);
  
    summaryBox.innerHTML = ranked.slice(0, 3).map(r => `<p>${r.sentence.trim()}</p>`).join("");
  
    const topKeywords = Object.entries(frequency).sort((a, b) => b[1] - a[1]).slice(0, 5);
    keywordList.innerHTML = topKeywords.map(([word, count]) => `<li><strong>${word}</strong>: ${count}</li>`).join("");
  
    const allWords = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    wordList.innerHTML = allWords.map(([word, count]) => `<li>${word}: ${count}</li>`).join("");
  }
  