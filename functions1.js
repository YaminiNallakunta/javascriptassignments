function greet(name) {              // function that passes to anothet function
    return `Hello, ${name}!`;
}
function addgreat(name, callback) {  // function that takes another function
    const message = callback(name);  // call back to the function to pass name
    console.log(message);
}
addgreat('yamini', greet);
addgreat('sagarika', greet);

/* 2nd question */


const arrowfun = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`;
};
const initial = arrowfun('Roger', 'Waters');
console.log(initial); 