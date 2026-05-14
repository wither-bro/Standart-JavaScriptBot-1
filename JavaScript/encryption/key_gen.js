// // // ! SYSTEM KEY GENERATOR ! // // //
// Генерирует динамические ключи для каждой сессии бота.

const crypto = require('crypto');

const keyGen = {
    generateSessionKey() {
        return crypto.randomBytes(32).toString('hex');
    },
    verifyKey(key) {
        return key.length === 64;
    }
};
module.exports = keyGen;
