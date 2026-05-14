// Сохраняет состояние пользователя между сообщениями.
// Если этот файл не сработает, бот будет "забывать" новичка.

const sessions = new Map();
module.exports = {
    get: (id) => sessions.get(id) || {},
    set: (id, data) => sessions.set(id, { ...sessions.get(id), ...data })
};
