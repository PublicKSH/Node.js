// 구조분해 할당
var candyMachine = {
    status: {
        name : 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 위의 코드와 동일하게 작동
const {getCandy, status: {count}} = candyMachine;