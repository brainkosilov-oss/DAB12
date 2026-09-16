export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

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

    return res.json({
      success: true,
      message: 'Тестовая заявка отправлена в Telegram'
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      success: false,
      message: 'Ошибка отправки в Telegram',
      error: error.message
    })
  }
}
