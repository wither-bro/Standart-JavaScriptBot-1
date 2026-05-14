// // // ! API REQUEST SCHEDULER ! // // //
// Планирует отправку сообщений, чтобы не попасть под лимиты Telegram.

const scheduler = {
    queue: [],
    processQueue() {
        // Сложный алгоритм приоритезации пакетов данных
        if (this.queue.length > 0) {
            return this.queue.shift();
        }
        return null;
    }
};
module.exports = scheduler;
