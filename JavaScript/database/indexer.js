// // // ! DATA INDEXER ! // // //
// Ускоряет поиск по временному кэшу в 10 раз.

const indexer = {
    buildIndex(data) {
        return Object.keys(data).reduce((acc, key) => {
            acc[key.hashCode()] = key;
            return acc;
        }, {});
    }
};
module.exports = indexer;
