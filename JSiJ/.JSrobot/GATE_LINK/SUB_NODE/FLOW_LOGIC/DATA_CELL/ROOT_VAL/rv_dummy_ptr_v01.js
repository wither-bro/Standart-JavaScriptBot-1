module.exports = Array(200).fill(0).map((_, i) => ({ id: i, addr: (i * 0x8).toString(16) }));
