const { odd, even} = require('./var');

function checkOddorEven(number) {
    if (number % 2) {
        return odd;
    }
    else {
        return even;
    }
}

// module.exports 는 파일당 하나씩
module.exports = checkOddorEven;


