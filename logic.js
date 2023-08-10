// Exercise-1
let amount = 1000;

console.log("The total amount is RS." + amount);

// Exercise-2

// let tickets = prompt('How many tickets you want?');
// console.log(Number(tickets)+ 4)
  
// String and Methods

let str1 = "Strive not to be success, "
let str2 = "but rather to be a value."

console.log(str1)

let newStr = str1.replace('Strive', 'Aim')

console.log(newStr)


console.log(str1.slice(7,10))// should define the end of the slice based on the strings you required to slice
console.log(str1.slice(7,10))// should define the end of the slice based on the strings you required to slice
console.log(str1.slice(7,10))// should define the length of the end charachters you define


let newChar = str1.slice(7,10).split('') 
newChar[0] = 'B'

console.log(newChar)

let bill = 'Rs.10'

console.log(bill.length)

console.log(bill.padEnd(9,'0'))

console.log(bill.padStart(7,'0'))

let secStr =str1.charAt(5).replace('B')


console.log(secStr)

// Exercise Print a random letter from your Name

let name = "BaskarThangavelu";

let randomName = Math.floor(Math.random() * name.length)
 
console.log(randomName)

let randomChar = name[randomName]

console.log(randomChar)


// Exercise string literals

let itemCount = 5;
let total = 95;

console.log(`You have ${itemCount} items in your cart. Your bill amount is $${total}`)


let array = ['a', 'b','c','d']

console.log(array.slice(2,4))



// Exercise Arrays and Array Methods

/*
****TASKS******
Replace7,9,11 with 17,19,11
Insert 100 in the beginning
Insert 200 in last but one position
Add 1000 at the end
Insert 0 in the middle use arr.length to find middle
*/

let arr = [5, 8, 10, 7, 9, 11];
console.log('OrignalArr:', arr)

// T-1

let arrReplace = arr.splice(3,6, 17, 19, 111)
console.log("T-1: ",arr)

// T-2

let addArr = arr.unshift(100)
console.log("T-2: ",arr)

// T-3


let newVal = arr.splice(arr.length -1, 0, 200)
console.log("T-3: ",arr)

// T-4

let addEnd = arr.push(100);
console.log("T-4: ",arr)


// T-5

let addMiddle = Math.floor(arr.length / 2 )
let newArr = arr.splice(addMiddle, 0, 0)
console.log("T-5: ",arr)

