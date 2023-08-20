"use strict";
// While Lopp
// var i: number = 1;
// while(i < 10)
// {
//     console.log("Amir");
//     i++;
// }
// For Lopp
// for (var i=1 ; i <= 10; i++)
// {
//     console.log("Amir");   
// }
//  Do While Lopp
// var i: number = 1;
// do
// {
//     console.log("Amir");
//     i++;
// }
// while(i < 10)
// Write a program that calculate sum of all even numbers from 1 to 100
var sum = 0;
var even = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("i", i);
        sum = sum += i;
        even.push(i);
    }
}
console.log("Sum of Even Numbers from 1 to 100", sum, even);
// Write a program that calculate sum of all odd numbers from 1 to 100
// var sum = 0;
// var odd: number[]=[]
// for (let i = 1; i <= 100; i++)
//  {
//     if ( i%2 != 0 )
//     {
//         console.log("i",i);
//         sum = sum += i;
//         odd.push(i);
//     }
// }
// console.log("Sum of odd Numbers from 0 to 100",sum,odd);
