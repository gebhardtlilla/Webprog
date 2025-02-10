const people = [
    { name: "Dani", age: 47 },
    { name: "Kata", age: 31 },
    { name: "Laci", age: 18 },
    { name: "Béla", age: 62 },
    { name: "Anikó", age: 24 },
    { name: "Gábor", age: 39 },
    { name: "Eszter", age: 28 },
    { name: "János", age: 52 },
    { name: "József", age: 24 },
    { name: "Tibor", age: 38 },
    { name: "Réka", age: 24 },
    { name: "Ákos", age: 29 }
];


//F1
const elso = people.find(e=>e.age<20);
console.log("F1:", elso)


//F2

const negyvenalatt = people.filter(e=>e.age<40).length;
console.log("F2:", negyvenalatt);

//F3
const igaze = !
people.some(e=>e.name.length>6);
console.log("F3:", igaze);

//F4
const sorted = people.toSorted((a, b) => a.age - b.age); 
console.log("F4:", sorted);

//F5
const sum = people.reduce((s,e) => s+e.age, 0);
const atlag = sum/people.length;
console.log("F5:", atlag);

//F6
// 10. Kiválogatás - Minden második elemet (páros indexűeket)
// const evenPositions = x.filter((e, i) => i % 2 === 0);
// console.log("Páros sorszámúak:", evenPositions);

const idosebb = people.filter((e, people) => people.age>atlag );
console.log("F6:", idosebb);



//F7
const jbetu= people.findLast(e=>e.name[0] === "J");
console.log("F7:", jbetu.name)

//F8
const maxValue = people.reduce((m, e) => e.age > m.age ? e : m, people[0]);
console.log("F8:", maxValue);

//F9











