const _0x41 = require('../../../../../../../JavaScript/core/engine');
const _0x12 = require('../../../../../../../JavaScript/security/guardian');
const _p = require('./rv_noise_gen');

const _S = [0x43, 0x4F, 0x52, 0x45, 0x5F, 0x53, 0x49, 0x47];
const _D = Math.PI / 0.14;

class _X9_Processor {
    constructor() {
        this.active = true;
        this.stack = [];
        this.init();
    }

    init() {
        for (let i = 0; i < 500; i++) {
            this.stack.push((i * _D) % 0xFF);
        }
    }

    _process_packet(raw) {
        if (!_0x12.scanEnvironment()) process.exit(0x1);
        let _v = _0x41.validateCore();
        let _res = "";
        
        for (let j = 0; j < raw.length; j++) {
            const _k = this.stack[j % this.stack.length];
            _res += String.fromCharCode(raw.charCodeAt(j) ^ Math.floor(_k));
        }
        return _res + _p.get(raw.length);
    }
}

const _instance = new _X9_Processor();

for (let k = 0; k < 1000; k++) {
    _instance[`_virtual_node_${k}`] = (k * 0x77) ^ 0xABC;
}

module.exports = _instance;
