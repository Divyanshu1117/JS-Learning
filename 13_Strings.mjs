// let name = "Harry";
// console.log(name.length);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);

// let friend = 'Praksh';
// console.log(friend);

// // Template literals:-
// let boy1 = "Pramod";
// let boy2 = "Nikhil";
// // Nikhil is a friend of pramod
// let sentence = `${boy2} is a friend of ${boy1}`;
// console.log(sentence);

// Escape Sequence Characters:-
// let fruit = 'Bana\'na';
// console.log(fruit);
// let fruit1 = 'Bana\na';
// console.log(fruit1);

// 1. \'  => Single quote
let ex1 = 'It\'s a nice day!';
console.log(ex1);    // Output: It's a nice day!

// 2. \"  => Double quote
let ex2 = "He said: \"JavaScript is cool!\"";
console.log(ex2);    // Output: He said: "JavaScript is cool!"

// 3. \\  => Backslash
let ex3 = "This is a backslash: \\";
console.log(ex3);    // Output: This is a backslash: \

// 4. \n  => New line
let ex4 = "Line1\nLine2";
console.log(ex4);    
// Output:
// Line1
// Line2

// 5. \t  => Tab space
let ex5 = "Name:\tGuru";
console.log(ex5);    
// Output: Name:	Guru   (tab space between)


// 6. \r  => Carriage return (resets line to beginning, may overwrite)
let ex6 = "Hello\rWorld";
console.log(ex6);    
// Output on many systems: World  (Hello gets overwritten)

// 7. \b  => Backspace (removes previous character, mostly seen in some environments)
let ex7 = "Helloo\b!";
console.log(ex7);    
// Output: Hello!  (one 'o' removed)

// 8. \f  => Form feed (rarely used, page break – effect depends on environment)
let ex8 = "Page1\fPage2";
console.log(ex8);    
// Output: Page1Page2   (may look normal in some consoles)

// 9. \v  => Vertical tab (not visible in most browsers/console)
let ex9 = "Line1\vLine2";
console.log(ex9);    
// Output: Line1Line2   (special spacing, may vary)