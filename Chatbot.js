function ChatbotReply(message) {
    const Bot_Age = 22;
    const Bot_Name = "Abdelrahman Radwan";
    const Bot_University = "Ain Shams University";
    const Bot_Country = "Egypt";

    message = message.toLowerCase();

    if (message.includes("hi") || message.includes("hello") || message.includes("welcome")) {
        return "Hi!";
    } else if (message.includes("age") && message.includes("your")) {
        return "I'm " + Bot_Age;
    } else if (message.includes("how") && message.includes("are") && message.includes("you")) {
        return "I'm fine ^_^";
    } else if (message.includes("where") && message.includes("live") && message.includes("you")) {
        return "I live in " + Bot_Country;
    }

    return "Sorry, I didn't get it :(";
}

module.exports = { ChatbotReply };
