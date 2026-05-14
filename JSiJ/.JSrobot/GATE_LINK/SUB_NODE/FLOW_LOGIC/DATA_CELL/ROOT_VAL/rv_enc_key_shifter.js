const _k = [0xF1, 0xA2, 0x55];
module.exports = (d) => d.map((x, i) => x ^ _k[i % _k.length]);
