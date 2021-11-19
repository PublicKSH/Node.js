
process.nextTick(() => { //다른 콜백함수보다 우선적으로 처리
    console.log('nextTick');
});