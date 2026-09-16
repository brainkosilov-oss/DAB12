import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    const { name, phone, product, comment } = req.body

    if (!name || !phone || !product) {
      return res.status(400).json({
        success: false,
        message: 'Заполните имя, телефон и что нужно изготовить'
      })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    const mailUser = process.env.MAIL_USER
    const mailPassword = process.env.MAIL_PASSWORD
    const mailTo = process.env.MAIL_TO

    if (!botToken || !chatId) {
      return res.status(500).json({
        success: false,
        message: 'Telegram не настроен'
      })
    }

    if (!mailUser || !mailPassword || !mailTo) {
      return res.status(500).json({
        success: false,
        message: 'Почта не настроена'
      })
    }

    const message = `
🔔 НОВАЯ ЗАЯВКА METLIGHT

👤 Имя: ${name}
📞 Телефон: ${phone}

🔧 Что нужно изготовить:
${product}

💬 Комментарий:
${comment || 'Не указан'}
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
      console.error('Telegram error:', telegramResult)

      return res.status(500).json({
        success: false,
        message: 'Не удалось отправить заявку в Telegram'
      })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: mailUser,
        pass: mailPassword
      }
    })

    await transporter.sendMail({
      from: mailUser,
      to: mailTo,
      subject: 'Новая заявка METLIGHT',
      text: message
    })

    return res.status(200).json({
      success: true,
      message: 'Заявка отправлена'
    })
  } catch (error) {
    console.error('Lead error:', error)

    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера'
    })
  }
}
