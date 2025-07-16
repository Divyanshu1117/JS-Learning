// Map Array:-
// let arr  = [45, 23, 21];
// // console.log(arr);
// let a = arr.map((value, index, array )=>{
//     console.log(value, index, array);
//     // return value + 1;
//     return value + index;
// })
// console.log(a);


// Array filter mwthod:-
// let arr2 = [45, 23, 21, 0, 3, 5];
// let a2 = arr2.filter((a)=>{
//     return a<10;
// })
// console.log(a2);

// Reduce method:- Reduce an array to a single value.
// let arr3 = [1, 2, 3, 5, 2, 1];
// let newarr3 = arr3.reduce((h1, h2)=>{
//     return h1 + h2;
// })
// console.log(newarr3);
// let arr3 = [1, 2, 3, 5, 2, 1];
// const reduce_func = ((h1, h2)=>{
//     return h1 + h2;
// })
// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3);

// let numbers = [10, 20, 30, 40];
// let sum = numbers.reduce((acc, val) => acc + val, 0);
// console.log(sum); // Output: 100

// let nums = [3, 8, 2, 10, 5];
// let maxVal = nums.reduce((max, val) => (val > max ? val : max), nums[0]);
// console.log(maxVal); // Output: 10

// let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// let count = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});
// console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }

// let nestedArr = [[1, 2], [3, 4], [5, 6]];
// let flat = nestedArr.reduce((acc, val) => acc.concat(val), []);
// console.log(flat); // Output: [1, 2, 3, 4, 5, 6]

// let cart = [
//     { item: 'Book', price: 200 },
//     { item: 'Pen', price: 50 },
//     { item: 'Bag', price: 500 }
// ];

// let totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(totalPrice); // Output: 750

// Combine example of filter, map, reduce:-
// let prices = [50, 120, 300, 80, 500, 150];

// // 1. Filter: Only prices > 100
// let filteredPrices = prices.filter(price => price > 100);

// // 2. Map: Apply 10% discount
// let discountedPrices = filteredPrices.map(price => price * 0.9);

// // 3. Reduce: Calculate total sum
// let total = discountedPrices.reduce((sum, price) => sum + price, 0);

// console.log("Original Prices:", prices);
// console.log("Filtered (>100):", filteredPrices);
// console.log("Discounted Prices:", discountedPrices);
// console.log("Total After Discount:", total);

// let total = prices.filter(p => p > 100).map(p => p * 0.9).reduce((a, b) => a + b, 0);
// console.log(total); // 963