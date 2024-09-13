const student = {
  name: "my wish",
  marks: 100,
};
student.marks = 200;

console.log(student["marks"]);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

const colors = ["red", "blue"];
colors[1] = "yellow";
console.log(colors[1]);
colors.push("green");
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("purple");
console.log(colors);

// traditional way ...function
function greet(name) {
  console.log("hi " + name);
}
greet("my wish");

const greet1 = function (name) {
  console.log("hello " + name);
};
greet1("swetha");

//arrow function

function sum1(a, b) {
  return a + b;
}
console.log(sum1(1, 2));

const hello = (a, b) => a + b; // => indicates fat arrow
console.log(sum1(1, 5));

//if else
let num = 10;
if (num % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

//switch
let day = 1;
switch (day) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("not a day");
    break;
}
