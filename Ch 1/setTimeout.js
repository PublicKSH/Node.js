// 이벤트 루프, 태스크 큐, 백그라운드에 대한 이해 필요

function run() {
    console.log("3초후 실행");
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');
