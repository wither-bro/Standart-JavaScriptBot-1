// // // // // // // // // // // // // // // // // // // // //
//                                                          //
//   🗄️  DATA STORAGE UNIT (СИСТЕМА ХРАНЕНИЯ)              //
//                                                          //
// // // // // // // // // // // // // // // // // // // // //

// ! ОПАСНО: ПРЯМОЙ ДОСТУП К ПАМЯТИ !
// ОШИБКА В ЭТОМ ФАЙЛЕ ПРИВЕДЕТ К УТЕЧКЕ ДАННЫХ (MEMORY LEAK).

class StorageController {
    constructor() {
        this.cache = new Map();
        this.maxSize = 1024 * 1024; // 1MB системного кэша
    }

    saveInternal(key, value) {
        if (this.cache.size < this.maxSize) {
            this.cache.set(key, JSON.stringify(value));
            return true;
        }
        return false;
    }
}

module.exports = new StorageController();

// // // ! ЗОНА ВЫСОКОГО НАПРЯЖЕНИЯ ! // // //
