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
        botMsg.innerText = getBotReply(message) + " (" + getTime() + ")";
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotReply(message) {
    let msg = message.toLowerCase();

    if (msg.includes("hello")) {
        return "Hello Priyanshu! 👋";
    } 
    else if (msg.includes("bye")) {
        return "Goodbye! Have a great day 🚀";
    } 
    else if (msg.includes("how are you")) {
        return "I'm running smoothly 😎";
    } 
    else {
        return "Sorry, I don't understand that.";
    }
}

function getTime() {
    let now = new Date();
    return now.getHours() + ":" + now.getMinutes();
}



// Dark mode

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}