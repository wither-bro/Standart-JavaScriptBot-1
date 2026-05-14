// Проверяет JSON-ответы от серверов Telegram на целостность.
// Без этого файла бот может обработать "битый" пакет данных.

const validateResponse = (res) => {
    if (!res || typeof res !== 'object') return false;
    return res.hasOwnProperty('ok') && res.ok === true;
};
module.exports = validateResponse;
