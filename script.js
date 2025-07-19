function classifyMood() {
    const text = document.getElementById("inputText").value.toLowerCase();
    let mood = "Neutral 😐";

    if (text.includes("happy") || text.includes("awesome") || text.includes("great")) {
        mood = "Happy 😊";
    } else if (text.includes("sad") || text.includes("upset") || text.includes("bad")) {
        mood = "Sad 😔";
    }

    document.getElementById("result").innerText = `Detected Mood: ${mood}`;
}
