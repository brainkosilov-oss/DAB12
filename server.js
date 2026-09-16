import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Сервер заявок METLIGHT работает'
  })
})

app.post('/api/test-telegram', async (req, res) => {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      return res.status(500).json({
        success: false,
        message: 'Не настроены TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID'
      })
    }

    const message = `
🔔 ТЕСТОВАЯ ЗАЯВКА METLIGHT

👤 Имя: Тестовый клиент
📞 Телефон: +7 999 123-45-67

🔧 Что нужно изготовить:
Тестовая заявка

💬 Комментарий:
Проверка подключения Telegram.
`

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      }
    )

    const telegramResult = await telegramResponse.json()

    if (!telegramResult.ok) {
      return res.status(500).json({
        success: false,
        message: 'Telegram вернул ошибку',
        error: telegramResult
      })
    }

    res.json({
      success: true,
      message: 'Тестовая заявка отправлена в Telegram'
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      success: false,
      message: 'Ошибка отправки в Telegram',
      error: error.message
    })
  }
})

app.listen(PORT, () => {
  console.log(`Сервер заявок запущен: http://localhost:${PORT}`)
})
