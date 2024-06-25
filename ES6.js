//1
const printName = (name) => "Hi " + name;

//2
const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;

//3
const person = {
    name: "Noam Chomsky",
    age: 92
};

const { name, age } = person;
console.log(name);
console.log(age);

