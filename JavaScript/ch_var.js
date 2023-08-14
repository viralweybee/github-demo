// 'use strict'
//----------------------------------------------------------------just count the frequency of each element in array -----------------------------
// // count frequency of every element
// const arr=[3,3,4,2,1,2,1]
// var map=new Map();
// for(let i=0;i<arr.length;i++){
//   if(map.has(arr[i])){
//     let ans=map.get(arr[i]);
//     ans+=1;
//     map.set(arr[i],ans);
//   }
//   else{
//     map.set(arr[i],1);
//   }
// }
// console.log(map)

// ---------------------------------------------------------------------------function apply method ---------------------------------------------
// function apply method or call


// const person={
//   firstName:"Viral",
//   lastName:"Devmurari",
//   fullName: function(){
//     return this.firstName+" "+this.lastName;

//   }
// }
// const person1={
//   firstName:"Marry",
//   lastName:"Doe",
// }
// person.fullName.apply(person1);
// console.log(person.fullName.bind(person1))

// person.fullName.call(person1,"Viral","Devmurari")
// console.log(person.fullName.apply(person1,["viral","Devmurari"]))
// console.log(Math.max.apply(4,[1,2,3]))


// -----------------------------------------------------------------------function bind------------------------------------------------
// const person={
//   firstName:"John",
//   lastName:"Doe",
//    fullName:function(){
//     return this.firstName+" "+this.lastName;
//   }
// }
// const member={
//   firstName:"Viral",
//   lastName: "Devmurari",

// }
// let fullName=person.fullName.bind(member)

//-----------------------------------------------------------------------set time out example--------------------------------------------
// setTimeout(function helo(){
//   console.log('hello message will display after a 3 s')
// },3000);
// console.log("hi")//this will display a message after a hi because it is a call stack conception


// for(let i=0;i<5;i++){
//   setTimeout(function heelo(){
//     console.log("this message will display after a 2 sec 5 times")
//   },3000)
// }


//-----------------------------------------------------------------------function closure
// let i;
// for( i=0;i<3;i++){
//   const log=()=>{
//     console.log(i);
//   }
//   setTimeout(log,100);
// }


// quiz for javascript


//// 1)
// let i;
// for( i=0;i<3;i++){
//   const log=()=>{
//     console.log(i);
//   }
//   setTimeout(log,100);
// }

// // 2)
// greetings();
// var greetings=function(){
//   console.log("First greetings")
// }
// greetings();
// function greetings(){
//   console.log("Second greetings");
// }
// greetings();

// 3)
// var variable =10;
// (()=>{
//   variable_3=35;
//   console.log(variable_3);
//   var variable_3=45;
//   variable_2=15;
//   console.log(variable)
// })();
// console.log(variable_2) 
// console.log(variable_3)
// var variable=30;


// if(true){
//   var a=4;
//   console.log(a);
// }
// console.log(a);
const add = (function () {
  let counter = 0;
  return function () { counter += 1; return counter }
})();

// add();
// add();
// add();
console.log(add())
console.log(add())
console.log(add())

