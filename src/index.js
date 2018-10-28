document.querySelector('h1').style.color = "orange";

function sum(a,  b) {
    this.a = 3;
    return this.a + b
}

console.log(sum(1,2))

var sum6 = (a , b) => (a + b)

console.log(sum6(2, 3))



// var a = {
//     a1: 'a1',
//     a2: 'a2',
//     a3: 'a3',
//     a4: 'a4'
// }


// var c = {
//     c1: 'a1',
//     c2: 'a2',
//     c3: 'a3',
//     c4: 'a4'
// }

// let b = {
//     ...a,
//     ...c,
//     a1: 'b1'
// }

var  a,b,c;
// [a, ...b] = [1,2,3,4,5,6];
// console.log(a, b);
// console.log("b is array: ", Array.isArray(b));


[a, b, c = 1000] = [11,22, 300];
console.log(a, b, c);

function log(msg, {course: courseName, publisher: publisherName}) {
    console.log(`${msg}  ${courseName} by ${publisherName}`);
}

log("Course", {course: 'JS Advanced', publisher: 'Beetroot academy' });

var a = {
    name: 'test',
    ob: 'ob'
}

var {name} = a;
console.log(name)


var test = function(name){
    a = {name}
    console.log(a)
}

test(name)

var ob = {a:1};
var newOb = Object.assign({},ob);
console.log(ob == newOb, ob === newOb)
var testOb = ob
console.log(ob == testOb, ob === testOb)
console.log(ob, newOb, testOb)
