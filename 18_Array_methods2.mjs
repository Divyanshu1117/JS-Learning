// Delete:- Array elements can be deleted using the delete operator:- Delete is an operator.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419];
// delete num[0];
// console.log(num.length);
// console.log(num[0]);

// let newArray = num.concat(num_more);
// console.log(newArray);
// console.log(num, num_more);

// Sort:- Sort() method is used to sort an array alphabetically:- Modify original array
// let compare = (a, b)=>{
//     // return a - b
//     // return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort(compare);
// num.reverse();
// console.log(num);

// Splice and Slice:-
// Splice can be used to add new items to an array.
// Slice out a piece from an array it creates anew array.

let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// let deletedValues = num.splice(2, 6, 1021, 1022, 1023, 1024, 1025);
// console.log(num);
// console.log(deletedValues);

let newNum = num.slice(3, 5);
console.log(newNum);