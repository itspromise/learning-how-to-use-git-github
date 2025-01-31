// JavaScript Variables and Data T ypes

// Data types

// string
// let name = "promise chibuike"
// console.log(name)

// console.log(typeof name)

// var age = 28
// console.log(age)

// console.log(typeof age)

// let iamavailable = true
// console.log(iamavailable)
// console.log(typeof iamavailable)
 


// javascript operators

// let a = 15
// let b = 75

// console.log(a + b)
// console.log(a - b)


// let ageTosin = 25
// let house10 = 56

// console.log(ageTosin + house10)

// let x = 10
// x -= 15
//  console.log(x)



// Logical Operator

// let p = true
// let q = false
// let r = false
// let s = true
// let t = false

// console.log(p && q);
// console.log(p || q);

// console.log(q || r);

// console.log(!s)



// Conditional statements

// let age = 17

// if (age > 18) {
//     console.log("You're an Adult")
// }
// else {
//     console.log("You're a Teenager")
// }

// let age = 12

// if (age > 18) {
//     console.log("you are an adult")
// }
// else if (age < 18 && age >= 15) {
//     console.log("you are a teenager")
// }

// else {
//     console.log("you are a child")
// }



// loops

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

// let i = 0
// while (i <= 15) {
//     console.log(i)
//     i++;
// }






// SECOND BRANCH OF LEARNING JAVASCRIPT



// JavaScript Function


// function greet(bose) {
//     console.log("Good Morning" + bose)
// };

// greet ("Tosin")


// function that calculate the area of rectancle

// function CalculateArea(width, height) {
//     return width*height
// }

// console.log(CalculateArea(5, 10))


// function for AreaTriangle

// function areaTriangle(base, height) {
//     return 1/2 * base * height
// }

// console.log(areaTriangle(3, 9));

// ARROW FUNCTION

// const sum = (a, b) => {
//     return a - b
// }

// console.log(sum(55, 25));

// const areaTriangle = () => {
//     const base = 10
//     const height = 10
//     return 1/2 + base + height
// }

// console.log(areaTriangle());

// const areaTriangle = (base, height) => {
//     return 1 / 2 + base + height
    
// }
// console.log(areaTriangle(5, 10))
// console.log(areaTriangle(10, 10));
//  console.log(areaTriangle(7, 15));


// sumArray

// const sumArray = (...numbers) => {
//     return numbers.reduce ((total, num) => total + num, 50 )
// }

// console.log(sumArray(1, 2, 3, 4, 5));

// global Variable

// let age = 34

// function declareAge() {
//     console.log(age);
// }

// declareAge()

// // local Variable

// function declareName() {
//     let name = "Tosin"
//     console.log(name);
// }

// declareName()

// JavaScript Closure

// function newAccess() {
//     let sentence = "i am a variable of type string"
    
//     const innerFunc = () => {
//         console.log(sentence)
//     }

//     return innerFunc
// }

// newAccess()()
// const innerFunc = newAccess()


// innerFunc()

// Counter Function

// function counter() {
//     let count = 5
    
//     return function increment() {
//         count++
//         return count
//     }
// }

// const increment = counter()

// console.log(increment())
// console.log(increment())

// // using loops

// for (let i = 0; i <= 10; i++){
//     setTimeout(()=> console.log(i), i*1500)
// }

// ARRAYS

// let age = []
// const fruits = ["Orange", "Apple", "Cherry"]

// fruits[2] = "Banana"

// fruits.push("Mango", "Coconut")

// const myInfo = [25, "22, Qwl NY", "MALE", true]


// const myName = "Tosin"

// fruits.unshift("Pineapple", "Gova")

// fruits.shift()
// fruits.shift()
// const fullstatement = `My name is ${myName}, a ${myInfo[0]} years old ${myInfo[2]} living at ${myInfo[1]}, and i love eating ${fruits[2]}`

// fruits.pop()
// console.log(fruits)
// console.log(fullstatement);

// console.log(`We have ${fruits.length} number of fruits in an array`)

// OBJECT

// const person = {
//     name: "Promise",
//     age: 28,
//     isEmployed: false,
// }

// person.name = "Victor";
// person.age = 30


// function determineStatus(value) {
//     if (value) {
//         return "Employed"
//     }
//     else {
//         return "Unemployed"
//     }
// }

// console.log(`His Name is ${person.name} and he is ${person.age} years old, also he is ${determineStatus(person.isEmployed)}`);



// ASSINGMENT

// CREATE A FUNCTION THAT CALCULATE THE SIMPLE INTEREST OF LOAN TAKING.

// let principal = 12000, rate = 5, time = 2;
// function interest( p, r, t) {
//     return (p * r * t) / 100;
// }

// let simpleInterest = interest(principal, rate, time);
// console.log("simple interest:" + simpleInterest);


// const button = document.getElementByID("LearningJavaScript").innerHTML = "Fuck JavaScript";


// let x = 25 + 25

// console.log(x)

// let multiply = [10 * 10, 10 / 5, 10 - 5]
// // let divide = 10 / 5;

// const fullStatement=`When you multiply 10 x 10 the answer is =${multiply[0]}, and you divide 10/5, your answer should be =${multiply[1]}, then you subtract 10 - 5, the answer should be =${multiply[2]}`

// console.log(fullStatement)
// console.log("Multiply 10x10=", multiply);
// console.log("Divide 10/5=", divide)

// let num = 20

// num -= 10
// console.log("subtract 10:", num)

// function calculate(a, b) {
//     return a+b
// }

// const firstpage = calculate(10, 15);
// const secondpage = calculate(12, 5);

// console.log(firstpage, secondpage);

// function divide(x, y) {
//     return x/y
// }
// console.log(divide(10, 5));



// conditional statement

// function player(playernumber) {
//     console.log("my name is promise, i love the player number", 10, "he is the greatest");

//     if (playernumber >= 15) {
//         console.log("not up to 10");
//     }

//     else {
//         console.log("Not up to 15");
//     }
// }


// player(10)



// Creating new element with JavaScript

// var p = document.createElement('p');
// p.innerHTML = "Manipulating HTML with JavaScript !";

// var display = document.querySelector('#display');
// display.appendChild(p);


// var list = document.createElement('list');
// list.innerHTML = "This is an ordered list <ol><li>Apple</li><br> <li>Mango</li><br> <li>Banana</li></ol>";

// var display = document.querySelector('#display');
// display.appendChild(list);

// var button = document.querySelector('button');

// button.onClick = function () {
//     this.style.backgroundcolor = randomcolor()
// };

// button.onclick = function () {
//     alert('Button Clicked')
// };

