// <=================== FUNCTIONS ========================>
// <===================== TASKS ==========================>


// **********{  1.Print odd numbers in an array?  }***********

// let arr = [1,2,3,4,5,6,7,8,9,10];

//------------------ traditional functions.

// function odd(arr){
    
//     let odd = [];

//     for(i=0;i<=arr.length;i++){
//         if(arr[i]%2 === 0){
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// }

// console.log(`print odd number:  ${odd(arr)}`);

//----------------- Anonymous function.

// const odd = function(arr){
//     let odd = [];

//     for(i=0;i<=arr.length;i++){
//         if(arr[i]%2 === 0){
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// }

// console.log(`print odd number:  ${odd(arr)}`);

//------------------ IIFE function.

// (function(){
//     let odd = [];

//     for(i=0;i<=arr.length;i++){
//         if(arr[i]%2 === 0){
//             odd.push(arr[i]);
//         }
//     }
//     console.log(odd);
// })

// (arr);

//------------------ Arrow function.

// const odd = (arr) =>{
//     let odd = [];

//     for(i=0;i<=arr.length;i++){
//         if(arr[i]%2 === 0){
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// }

// console.log(`print odd number:  ${odd(arr)}`);



// ***********************{  1st QUESTION END  }*************************


// **********{  2.Convert all the strings to title caps in a string array?  }***********

// let str = 'hey buddy belive in your self you can do any thinks';

//------------------ traditional functions.

// function titleCap (str){
    
//     let splits = str.split(' ');
//     let output = [];

//     for(i = 0; i < splits.length; i++){
//         let split = splits[i];
//         let cap = split[0].toUpperCase() + split.slice(1);
//         output.push(cap);
//     }

//     return output.join(' ');
// }

// console.log(titleCap(str));

//----------------- Anonymous function.

// const titleCap = function(str){
 
//     let splits = str.split(' ');
//     let output = [];

//     for (i=0; i < splits.length; i++){
  
//         let split = splits[i];
//         let cap = split[0].toUpperCase() + split.slice(1);
//         output.push(cap);
//     }

//     return output.join(' ');

// }

// console.log(titleCap(str))


//------------------ IIFE function.


// (function(str){

//     let splits = str.split(' ');
//     let output = [];
    
//         for (i=0; i < splits.length; i++){
      
//             let split = splits[i];
//             let cap = split[0].toUpperCase() + split.slice(1);
//             output.push(cap);
//         }
    
//         console.log(output.join(' '));
// })

// (str);


//------------------ Arrow function.

// const titleCap = (str) =>{

//     let splits = str.split(' ');
//     let output = [];
    
//         for (i=0; i < splits.length; i++){
      
//             let split = splits[i];
//             let cap = split[0].toUpperCase() + split.slice(1);
//             output.push(cap);
//         }
    
//         return output.join(' ');
// }

// console.log(titleCap(str));


// ***********************{  2nd QUESTION END  }*************************

// **********{  3.Sum of all numbers in an array   }***********

// let arrSum = [1,2,3,4,5,6,7,8,9,10];

//------------------ traditional functions.

// function sum (arr){
    
//     let sum = 0;

//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }

//     return sum;

// }

// console.log(`sum of the arry:  ${sum(arrSum)}`);


//----------------- Anonymous function.

// const sum = function(arr){

//     let sum = 0;

//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }

//     return sum;
// }

// console.log(`sum of the arry:  ${sum(arrSum)}`);


//------------------ IIFE function.

// (function(arr){
    
//     let sum = 0;

//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }

//     console.log(sum);
// })
// (arrSum);

//------------------ Arrow function.

// const sum = (arr) => {

//     let sum = 0;

//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }

//     return sum;
// }

// console.log(`sum of the arry:  ${sum(arrSum)}`);

// ***********************{  3nd QUESTION END  }*************************

// **********{  4.Return all the palindromes in an array    }***********


//------------------ traditional functions.

// function palindrome (num) {
//     let str = num.toString();
//     let arr = str.split('');
//     let reversed = arr.slice().reverse();

//     if(arr.join('') === reversed.join('')){
//         return true;
//     }else{
//         return false;
//     }

// }

// console.log(palindrome(121));

//----------------- Anonymous function.

// const palindrome = function (num) {
//     let str = num.toString();
//     let arr = str.split('');
//     let reversed = arr.slice().reverse();

//     if(arr.join('') === reversed.join('')){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(palindrome(121));

//------------------ IIFE function.

// (function(num){
//     let str = num.toString();
//     let arr = str.split('');
//     let reversed = arr.slice().reverse();

//     if(arr.join('') === reversed.join('')){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// })
// (123);

//------------------ Arrow function.

// const palindrome = (num) =>{

//     let str = num.toString();
//     let arr = str.split('');
//     let reversed = arr.slice().reverse();

//     if(arr.join('') === reversed.join('')){
//         return true;
//     }else{
//         return false;
//     }

// }

// console.log(palindrome(121));

