// Модуль создания контрольных сумм для файлов ядра.
// Если хеш не совпадет, бот поймет, что его пытались взломать.

const hasher = (data) => {
    return crypto.createHash('sha512').update(data).digest('hex');
};
module.exports = hasher;
