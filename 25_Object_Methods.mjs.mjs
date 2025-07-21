console.log(console);
console.log("Hi, Divyanshu!");
console.error("Hey this is an error");
console.assert(555 > 53);
console.assert;
console.clear();
let obj = { a: 1, b: 2, c: 3 };
console.table(obj);
console.warn("Hey please dont't drink soda");
console.info("Hey this is an important info");
console.log("log");
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err" != false);
console.assert("err" == false);
console.time();
console.time("a");
console.timeEnd("a");
console.time("a");
console.time("p1");
console.timeEnd("p1");

console.time("forLoop");
for (let i = 0; i < 5; i++) {
    console.log(233);
}
console.timeEnd("forLoop");

console.time("whileLoop");
let i = 0;
while(i < 5){
    console.log(233);
    i++;
}
console.timeEnd("whileLoop");