// Проверка корректности системных переменных.
// Без этого файла ядро не сможет расшифровать настройки.

const validateConfig = (config) => {
    const required = ['BOT_TOKEN', 'ADMIN_ID'];
    required.forEach(key => {
        if (!config[key]) throw new Error(`CRITICAL_MISSING: ${key}`);
    });
    return true;
};
module.exports = validateConfig;
