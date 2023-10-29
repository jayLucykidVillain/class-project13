/*

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/

function oddOrEven(array) {
    //enter code here
   let strO1 = "odd";
   let strE2 = "even";
   let arrSum = 0;
   
   for (let i = 0; i < array.length; i++) {
     arrSum = arrSum + array[i];
   }
   
   if (arrSum % 2 === 0) {
     return strE2;
   }
   else if (arrSum % 2 !== 0) {
     return strO1;
   }
   else if (arrSum === 0) {
     return strE2;
   }
   else if(array.length === 0) {
     return strE2;
   }
   
 }