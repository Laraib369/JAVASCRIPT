// 1......Ways to print in JAVASCRIPT.......;
// console.log("Hello Sir!!!!!");
// alert("Hello");
// document.write("This is document write");


// 2......JavaScript console API.....;
// console.warn("This is a warning");
// console.error("This is an error");
// console.clear();
//3........ JavaScript Variables.....;
// Defination: containers to store data values
var number = 32;
var number2 = 56;
// console.log(number+number2);

// 4.Types of data types in JS;
// number;
var num1 = 455;
var num2 = 56.99;
// String;
var str1 = "This is a string";
var str2 = 'This is also a string';
// Objects;
var marks = {
    ravi: 34,
    shubham: 88,
    larry: 99
}
// console.log(marks);
// Boolean;
var a = true;
var b = false;

var und = undefined;
// console.log(und);

var n = null;
// console.log(n);

// At a very high level there are two types of data types in JS:
// 1.Primitive:(undefined,null,number,string,boolean,symbol)
// 2.Reference:(Arrays & Objects)

var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// Operators in JS:
// Arithmetic ops:
//    var i = 34;
//    var k = 56;

//    console.log("The sum of i&k is " ,i+k);
//    console.log("The subs of i&k is " ,i-k);
//    console.log("The product of i&k is " ,i*k);
//    console.log("The division of i&k is " ,i/k);

// Assignment ops:
// var c = i;
// c+=2;
// c-=2;
// c*=2;
// c/=2;
// console.log(c);

// comparision Ops:
// var x = 34;
// var y = 56;
// console.log(x==y);
// console.log(x<=y);

// Logical ops:
// 1.And(&&)ops:
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(false&&true);
// 2.Or(||)ops:
// console.log(true||true);
// console.log(true||false);
// console.log(false||false);
// console.log(false||true);

// 3.Not(!)ops:
// console.log(!false);
// console.log(!true);

// Functions in javascript:
// DRY principle

// function avg(a, b){
//     return (a+b)/2;
// }

// c = avg(3, 3);
// console.log(c);
// c2 = avg(2,3);
// console.log(c2);

// Conditionals in Javascript;

// var age =64;
// if(age<56){
//     console.log("you are a kid");
// }
// else{
//     console.log("you are not a Kid");
// }


var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i = 0;i<arr.length;i++);
// console.log(arr[i]);

// arr.forEach(function(element){
//     console.log(element)
// })

// let j = 0;
// const ac = 0;
// ac++;
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while(j<arr.length)

// var arr = [1, 2, 3, 4, 5, 6, 7];
// for(var i=0;i<arr.length;i++){
//     if(i==3){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

let myArr = ["FAN", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("larry");
// myArr.shift();
// myArr.unshift("harry");
// console.log(myArr.unshift("Harry"));
// const newLen = myArr.unshift("Larry");
// myArr.sort();
// myArr.toString();
// console.log(myArr);

// String methods in Javascript;

let mylovelystring = "larry is good";
// console.log(mylovelystring.length);
// console.log(mylovelystring.indexOf("good"));
// console.log(mylovelystring.slice(1,5));
// console.log(mylovelystring.replace("larry","harry"));

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());

// DOM Manipulation;
// let elem = document.getElementById("firstcontainer");
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");

// console.log(elemClass);

// elemClass[0].style.background = "red";

// elemClass[0].classList.add('bgPrimary');


// elemClass[0].classList.add("textsuccess");

// console.log(elemClass[0].innerText)

// console.log(elemClass[0].innerHTML)

// let tn = document.getElementsByTagName("div");
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "this is a para";
// tn[0].appendChild(createdElement);

// function clicked(){
//     console.log("This button was clicked");
// }
// window.onload = function(){
//     console.log("This document was loaded");
// }



// Events in Javascript;
// firstcontainer.addEventsListener('click',function(){
//     console.log("clicked It")
// })
// firstcontainer.addEventsListener('mouseover',function(){
//     console.log("mouse on container")
// })

// Arrow functions
// function sum(a, b) {
//     return a + b;
// }
// sum = (a, b) => {
//     return a + b;

// }
// let m = sum(9, 8);
// console.log(m);

// logKaro = () => {
//     document.querySelectorAll('.container')[1].innerHTML="<b>Set Interval fired<b>"
//     console.log("i am your log");
// }

// SetTimeout and SetInterval;

// setTimeout(logKaro,2000);
// setInterval(logKaro,2000);


// Local storage in javascript;
// localStorage.setItem("name", "larry");
// localStorage;
// localStorage.getItem("name");
// localStorage.removeItem("");
// localStorage.clear;


// JSON;
// obj = {name:"larry",length: 1, a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(jso)
// parsed = JSON.parse(`{"name":"larry","length":1,"a":{"this":"that"}}`);
// console.log(parsed);


