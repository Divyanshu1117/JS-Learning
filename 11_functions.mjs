const hello = () => {
    console.log("Hey how are you. I'm fine" );
    return "hi";
}
function onePlusAvg(x, y) {
    // console.log("Done");
    return Math.round(1 + (x + y) / 2);
}
const sum = (p, q) => {
    return p + q;
}
let a = 1;
let b = 2;
let c = 3;
let v = hello();
console.log(v);
console.log("Average of a and b is ", onePlusAvg(a, b));
console.log("Average of b and c is ", onePlusAvg(b, c));
console.log("Average of c and a is ", onePlusAvg(c, a));
console.log(sum(9, 7));