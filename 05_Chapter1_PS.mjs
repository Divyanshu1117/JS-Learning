// Chapter 1 - Q1:-
let a = "Harry"
let b = 6
console.log(a + b);

// Q2:-
console.log(typeof (a + b));

// Q3:-
const a1 = {
    name: "Harry",
    section: 1,
    isPrincipal: false
}
// a1 = 45;
// a1 = {};

// Q4:-
a1['friend'] = "Shubham"; // a1['friend'] = "Shubham"; ➝ Nayi property friend add ho gayi object me.
a1['name'] = "Lovish"; // a1['name'] = "Lovish"; ➝ Purani property name ki value "Harry" se change ho kar "Lovish" ho gayi.
console.log(a1);

// Q5:-
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotionsl disturbance and anxiety",
    yakka: "work, especially hard work",
    languid: "showing or having very little strength, energy, or activity (formal + literary)",
    gad: "to move restlessly or aimlessly from one place to another"
}
console.log(dict.yakka);
console.log(dict['gad']);