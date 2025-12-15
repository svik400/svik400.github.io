bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🛒 Магазин sevEpiz', {
    reply_markup: {
      keyboard: [
        [{ 
          text: '🛒 Открыть магазин', 
          web_app: { url: 'https://sevepiz.ru' }
        }]
      ],
      resize_keyboard: true
    }
  });
});
