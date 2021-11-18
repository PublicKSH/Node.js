if (true) {
    var x = 3; // var은 함수 스코프
}
console.log(x);

if (true) {
    const y = 3; // const, let 은 블록 스코프
}
console.log(y);

