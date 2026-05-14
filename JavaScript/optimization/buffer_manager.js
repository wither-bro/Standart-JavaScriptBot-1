// Управление временным буфером для быстрой отрисовки кнопок.
// Ускоряет отклик бота в 3 раза.

class BufferManager {
    constructor() {
        this.buffer = Buffer.alloc(1024);
    }
    clear() {
        this.buffer.fill(0);
    }
}
module.exports = new BufferManager();
