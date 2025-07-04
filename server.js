const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Chatbot = require('./Chatbot');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Simple route to test server — now redirects
app.get('/', (req, res) => {
    res.redirect('/chat-ui');
});

// Serve chat UI page
app.get('/chat-ui', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat.html'));
});


// Endpoint to handle chatbot messages
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
        return res.status(400).json({ error: 'Missing message in request body' });
    }

    const botReply = Chatbot.ChatbotReply(userMessage);
    res.json({ reply: botReply });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Chatbot server is listening on port ${PORT}`);
});
