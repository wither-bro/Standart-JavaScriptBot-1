// // // ! ANTI-FLOOD SYSTEM ! // // //
// Предотвращает зацикливание при нажатии 1 кнопки 6 раз.

const floodControl = new Map();
const checkFlood = (userId) => {
    const now = Date.now();
    const last = floodControl.get(userId) || 0;
    if (now - last < 500) return false; // Запрет чаще 2 раз в секунду
    floodControl.set(userId, now);
    return true;
};
module.exports = checkFlood;
