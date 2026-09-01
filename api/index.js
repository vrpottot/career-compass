// Точка входа для Vercel Serverless Functions.
// Оборачивает Express-приложение из backend/server.js.
// Все запросы /api/* Vercel переписывает сюда (см. vercel.json),
// а Express уже сам разбирает пути /api/auth, /api/quiz и т.д.
const app = require('../backend/server.js');

module.exports = app;
