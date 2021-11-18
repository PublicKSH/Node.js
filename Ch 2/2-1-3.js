//객체 리터럴
var sayNode = function() {
    console.log('Node');
}

var es = 'ES';
var oldObject = {
    sayJs : function() {
        console.log('JS');
    },
    sayNode: sayNode,
}
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJs();
console.log(oldObject.ES6);

