function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    const chatBox = document.getElementById("chat-box");

    if (message === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);

    input.value = "";

    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.innerText = getBotResponse(message);
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello")) return "Hi there! 😊";
    if (input.includes("name")) return "I am your AI Assistant.";
    if (input.includes("how are you")) return "I am just code, but I'm doing great!";
    if (input.includes("bye")) return "Goodbye! Have a nice day!";
    if (input.includes("who created you")) return "I was modified by an MCA student!";
    if (input.includes("radhe radhe")) return "RADHE RADHE";
    if (input.includes("time")) return "I Don't know !";
    
    return "Sorry, I don't understand that yet.";
}
document.getElementById("clear-btn").addEventListener("click", () => {
    const chatBox = document.getElementById("chat-box");
    // This clears the messages and puts the original greeting back
    chatBox.innerHTML = '<div class="bot-message">Hello! How can I help you today?</div>';
});


document.getElementById("darkModeBtn").addEventListener("click",() => {
    document.body.classList.toggle("dark-mode");
});