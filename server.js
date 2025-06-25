const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Handle GET at root (optional)
app.get('/', (req, res) => {
  res.send('Chatbot server is running! Send a POST request to /chat');
});

// Handle chatbot POST requests
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: 'Please provide a message.' });
  }

  const msg = userMessage.toLowerCase().trim();
  let botReply = '';

  // Simple conversation logic
  if (msg === 'hi' || msg === 'hello') {
    botReply = 'Hello!';
  } else if (msg === 'how are you?') {
    botReply = 'I am fine, thank you! How are you?';
  } else if (msg === 'had lunch' || msg === 'have you had lunch?') {
    botReply = 'Not yet. What about you?';
  } else if (msg === 'yes had') {
    botReply = 'Great! Hope you enjoyed it.';
  } else if (msg === 'no not yet') {
    botReply = 'You should eat soon!';
  } else {
    botReply = `You said: ${userMessage}`;
  }

  res.json({ reply: botReply });
});

app.listen(port, () => {
  console.log(`Chatbot server is listening at http://0.0.0.0:${port}`);
});

