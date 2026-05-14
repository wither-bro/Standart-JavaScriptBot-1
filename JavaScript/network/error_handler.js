// Перехват сетевых тайм-аутов и 404 ошибок.
// Если файл поврежден, бот уйдет в бесконечный реконнект.

const handleNetError = (error) => {
    const retryCodes = [429, 500, 502, 503];
    return retryCodes.includes(error.code) ? 'RETRY_LATER' : 'ABORT';
};
module.exports = handleNetError;
