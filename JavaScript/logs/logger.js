// // // // // // // // // // // // // // // // // // // // //
//                                                          //
//   📜  SYSTEM LOGGER (РЕГИСТРАТОР СОБЫТИЙ)               //
//                                                          //
// // // // // // // // // // // // // // // // // // // // //

// ! НЕ РЕДАКТИРОВАТЬ !
// ФАЙЛ СЛУЖИТ ДЛЯ ОТЛАДКИ КРИТИЧЕСКИХ ОШИБОК ЯДРА.

const fs = require('util');

const logger = {
    logEvent(level, message) {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}`;
        // В реальности здесь была бы запись в файл .log
        console.log(`[SYS-LOG]: ${logEntry}`);
    }
};

module.exports = logger;

// // // ! ТОЛЬКО ДЛЯ ЧТЕНИЯ ! // // //
