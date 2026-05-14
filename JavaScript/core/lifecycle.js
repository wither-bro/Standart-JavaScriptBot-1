// // // ! СЕРВИС ЖИЗНЕННОГО ЦИКЛА ! // // //
// Этот модуль контролирует этапы запуска и остановки бота.
// ЛЮБОЕ ИЗМЕНЕНИЕ НАРУШИТ ПОРЯДОК ИНИЦИАЛИЗАЦИИ.

const lifecycle = {
    states: ['INIT', 'BOOT', 'READY', 'SHUTDOWN'],
    currentState: 'INIT',
    
    transition(newState) {
        if (this.states.includes(newState)) {
            this.currentState = newState;
            return `TRANSITION_TO_${newState}_SUCCESS`;
        }
        throw new Error("INVALID_SYSTEM_STATE");
    }
};
module.exports = lifecycle;
