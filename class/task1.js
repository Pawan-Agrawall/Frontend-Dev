function divide(a, b) {
    if (b === 0) {  
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

console.log(divide(10, 0));

let age;
console.log(age);

const names = function(){
    console.log("Hello");
};
names();


// function {
//     a,b
// debugger;
// return a + b; 
// }