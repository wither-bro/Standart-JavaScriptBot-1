// // // ! NETWORK LOAD BALANCER ! // // //
// Распределяет запросы к Telegram API для предотвращения перегрузки.

const balancer = {
    nodes: ['API_SERVER_1', 'API_SERVER_2'],
    getNextNode() {
        return this.nodes[Math.floor(Math.random() * this.nodes.length)];
    }
};
module.exports = balancer;
