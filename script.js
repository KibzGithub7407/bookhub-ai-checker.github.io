document.getElementById("checkBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  if (!text.trim()) {
    alert("Please paste some text first!");
    return;
  }

  // --- AI Detection (example: GPTZero API placeholder) ---
  document.getElementById("aiResult").innerText = "AI Detection: Checking...";
  try {
    // Replace with real API endpoint + key
    const aiResponse = await fetch("https://api.gptzero.me/v2/predict/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY_HERE"
      },
      body: JSON.stringify({ document: text })
    });
    const aiData = await aiResponse.json();
    document.getElementById("aiResult").innerText =
      "AI Detection: " + (aiData.results ? JSON.stringify(aiData.results) : "No data");
  } catch (err) {
    document.getElementById("aiResult").innerText =
      "AI Detection: Error (add API key)";
  }

  // --- Plagiarism Check (example free API placeholder) ---
  document.getElementById("plagResult").innerText = "Plagiarism: Checking...";
  try {
    // Example: https://plagiarismdetector.net/ (doesn’t always provide free API)
    const plagResponse = await fetch("https://api.plagiarismchecker.net/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY_HERE"
      },
      body: JSON.stringify({ text: text })
    });
    const plagData = await plagResponse.json();
    document.getElementById("plagResult").innerText =
      "Plagiarism: " + (plagData.result ? plagData.result : "No data");
  } catch (err) {
    document.getElementById("plagResult").innerText =
      "Plagiarism: Error (add API key)";
  }
});
