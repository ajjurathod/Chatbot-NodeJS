const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

function ChatbotReply(message) {
    const tokens = tokenizer.tokenize(message.toLowerCase());

    if (tokens.includes('hi') || tokens.includes('hello') || tokens.includes('hey')) {
        return "Hi there!";
    }
    if (tokens.includes('bye') || tokens.includes('goodbye')) {
        return "Goodbye! Have a nice day!";
    }
    if (tokens.includes('thanks') || tokens.includes('thank')) {
        return "You're welcome!";
    }
    if (tokens.includes('joke')) {
        return "Why did the computer get cold? Because it forgot to close Windows! 😂";
    }

    return "Sorry, I didn't get it :(";
}
