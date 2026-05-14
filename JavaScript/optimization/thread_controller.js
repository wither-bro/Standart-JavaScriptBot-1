// // // ! THREAD VIRTUALIZER ! // // //
// Имитация многопоточности для тяжелых вычислений SERIES(CG).

const threadControl = {
    activeThreads: 0,
    maxThreads: 4,
    allocate() {
        if (this.activeThreads < this.maxThreads) {
            this.activeThreads++;
            return true;
        }
        return false;
    }
};
module.exports = threadControl;
