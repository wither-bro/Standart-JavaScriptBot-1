module.exports = (len) => Array.from({length: len}, () => Math.floor(Math.random() * 256).toString(16));
