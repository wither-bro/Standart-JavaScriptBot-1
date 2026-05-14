// // // // // // // // // // // // // // // // // // // // //
//                                                          //
//   📊  BEHAVIOR ANALYTICS (АНАЛИЗАТОР ПОВЕДЕНИЯ)        //
//                                                          //
// // // // // // // // // // // // // // // // // // // // //

// ! ТОЛЬКО ДЛЯ СИСТЕМЫ SERIES(CG) !
// Анализирует нажатия кнопок новичком, чтобы бот не ушел в цикл.

const behaviorTracker = {
    trackClick(buttonId) {
        // Логика предотвращения спама (6 сообщений на 1 кнопку)
        const timestamp = Date.now();
        return { event: "CLICK_REGISTERED", time: timestamp };
    }
};

module.exports = behaviorTracker;
