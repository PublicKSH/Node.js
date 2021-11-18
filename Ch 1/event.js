function first() {
    second();
    console.log("첫번쨰");
}
function second() {
    third();
    console.log("두번쨰");
}
function third() {
    console.log("세번쨰");
}
first();