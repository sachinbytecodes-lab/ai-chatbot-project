function scrollToBottom() {
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}
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
    
    
    scrollToBottom();

   
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.innerText = getBotResponse(message);
        chatBox.appendChild(botMsg);
        scrollToBottom();
    }, 500);
}
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function getBotResponse(input) {
    input = input.toLowerCase();

    // --- Teacher's Required Prompts ---
    if (input.includes("help")) return "I would be happy to help! What do you need assistance with?";
    if (input.includes("topic") || input.includes("explore")) return "We can explore technology, programming, or just have a friendly chat. What sounds good to you?";
    if (input.includes("may i help you")) return "Actually, I am here to help YOU! What can I do for you today?";

    // --- Core Identity & Greetings ---
    if (input.includes("hello") || input.includes("hi ") || input === "hi") return "Hi there! 😊";
    if (input.includes("name")) return "I am your AI Assistant.";
    if (input.includes("how are you")) return "I am just code, but I'm doing great!";
    if (input.includes("who created you")) return "I was modified by an MCA student!";
    if (input.includes("radhe radhe")) return "RADHE RADHE 🙏";
    if (input.includes("bye")) return "Goodbye! Have a nice day!";
    
    // --- NEW: General Small Talk ---
    if (input.includes("thank")) return "You're very welcome!";
    if (input.includes("good morning")) return "Good morning! I hope you have a productive day.";
    if (input.includes("good night")) return "Good night! Shutting down my visual sensors for the evening.";
    if (input.includes("what's up") || input.includes("whats up")) return "Not much, just hanging out in the DOM! What about you?";
    if (input.includes("how old are you")) return "I was born just a few days ago, but I learn fast!";
    if (input.includes("favorite color")) return "I am quite fond of Midnight Glass and Neon Cyan. 😉";

    // --- NEW: Tech & Programmer Easter Eggs ---
    if (input.includes("jarvis")) return "I might be a distant cousin of Jarvis, but right now I'm just your friendly web assistant!";
    if (input.includes("python") || input.includes("javascript")) return "I love coding! Python and JavaScript are amazing for building things like me.";
    if (input.includes("ai") || input.includes("artificial intelligence")) return "AI is fascinating! Especially things like computer vision and smart chatbots.";
    if (input.includes("joke")) return "Why do programmers prefer dark mode? Because light attracts bugs! 🐛";

    // --- Dynamic Responses ---
    if (input.includes("time")) {
        const now = new Date();
        return "The current time is " + now.toLocaleTimeString() + ".";
    }
    if (input.includes("date")) {
        const now = new Date();
        return "Today's date is " + now.toLocaleDateString() + ".";
    }

    // --- Fallback ---
    return "Sorry, I don't understand that yet. Could you try asking something else?";
}
document.getElementById("clear-btn").addEventListener("click", () => {
    const chatBox = document.getElementById("chat-box");
    // This clears the messages and puts the original greeting back
    chatBox.innerHTML = '<div class="bot-message">Hello! How can I help you today?</div>';
});


document.getElementById("darkModeBtn").addEventListener("click",() => {
    document.body.classList.toggle("dark-mode");
});