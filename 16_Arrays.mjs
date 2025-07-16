// Arrays are mutable arrays can be changed.
// let marks_class_12= [91, 82, 63, 84, false, "Not Present"];
// marks_class_12[0] = 96; // Changing the value of an array
// marks_class_12[6] = 89; //  Adding a new value to the array
// console.log(marks_class_12);
// console.log(typeof marks_class_12);
// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[5]);
// console.log(marks_class_12[6]);
// console.log(marks_class_12[7]); // Will be undefined because index 6 does not exist.
// console.log("The length of marks_class_12 is", marks_class_12.length);

// Quick Quiz:-
/*let marks = [45, 65, 53, 54, 78];
for(let i = 0;i<1;i++){
    console.log("The length of marks is", marks.length);
    }*/
   
   let marks = [45, 65, 53, 54, 78];
   for (let i = 0; i < marks.length; i++) {
    console.log(`marks[${i}] = ${marks[i]}`);
}
