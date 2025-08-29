import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_API = ⁠ https://api.telegram.org/bot${TOKEN} ⁠;

app.use(express.json());

app.post('/api/bot', async (req, res) => {
  const { message } = req.body;

  if (message && message.text) {
    const chatId = message.chat.id;
    const text = message.text;

    let reply = "I'm not sure what you mean.";

    if (text === '/start') {
      reply = 'Welcome to Rocky Spikes Volleyball Bot!';
    }

    await fetch(⁠ ${TELEGRAM_API}/sendMessage ⁠, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: reply
      })
    });
  }

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(⁠ Server running on port ${PORT} ⁠);
});
