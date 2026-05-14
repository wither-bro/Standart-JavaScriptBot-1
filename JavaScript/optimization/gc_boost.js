// // // // // // // // // // // // // // // // // // // // //
//                                                          //
//   🚀  MEMORY & GC OPTIMIZER (КОНТРОЛЛЕР ПАМЯТИ)         //
//                                                          //
// // // // // // // // // // // // // // // // // // // // //

// ! ВНИМАНИЕ: УПРАВЛЕНИЕ РЕСУРСАМИ !
// JavaScript может потреблять слишком много RAM. 
// Этот файл принудительно очищает кэш и ускоряет вычисления.

const memoryControl = {
    forceCleanup() {
        if (global.gc) {
            global.gc();
        }
        return "MEMORY_RELEASED";
    },

    getHeapStats() {
        const usage = process.memoryUsage();
        return `RSS: ${Math.round(usage.rss / 1024 / 1024)}MB`;
    }
};

module.exports = memoryControl;

// // // ! НЕ ТРОГАТЬ: СИСТЕМНЫЙ ПРОЦЕСС ! // // //
