// 각종 편의 기능들을 모아 놓은 모듈
const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y) => { //인수로 넣은 함수가 사용되면 경고를 줌
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error('error');
    })