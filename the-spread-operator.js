/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
console.log("second array:", arr2)

//Adding another element to arr2, also adds it to arr1 (which we may not necessarily want). Spread operators can
//help with this. 
arr2.push(4);
console.log("Second array:", arr2);
console.log("First array", arr1);

// Copying an array
let arr3 = [4,5,6];
let arr4 = [...arr3];
arr4.push(7);
console.log("third array", arr3);
console.log("forth array", arr4)


// Copying an object
let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1,d:4};
console.log("First object:", obj1);
console.log("Second object:", obj2);
//Changing a value in the first object
let obj3 = {...obj1, b:5};
console.log("Third Object", obj3);

// Copying only part of an array/object (This will log all the elements of the first array, first object, third array
//and extra arbitrary values added)
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", 1]
console.log(arr5)
