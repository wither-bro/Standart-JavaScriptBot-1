// Фильтрация конфиденциальных данных.
// Удаляет токены и пароли из логов, чтобы новичок их случайно не увидел.

const filter = (data) => {
    const sensitiveKeys = ['BOT_TOKEN', 'ADMIN_ID', 'password'];
    let cleanData = data;
    sensitiveKeys.forEach(key => {
        cleanData = cleanData.replace(new RegExp(key, 'gi'), '[REDACTED]');
    });
    return cleanData;
};
module.exports = filter;
