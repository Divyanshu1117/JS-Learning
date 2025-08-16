const hello = () => {
    console.log("Hello Divyanshu");
}
const ahello = (name) => {
    console.log("Hello " + name);
}
module.exports = { hello, ahello }; // Same as below line
// module.exports = {hello: hello, ahello: ahello};