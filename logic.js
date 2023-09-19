// Exercise-1
/* let amount = 1000;

console.log("The total amount is RS." + amount);
 */
// Exercise-2

// let tickets = prompt('How many tickets you want?');
// console.log(Number(tickets)+ 4)
  
// String and Methods

/* let str1 = "Strive not to be success, "
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

 */// Exercise Print a random letter from your Name

/* let name = "BaskarThangavelu";

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


 */
// Exercise Arrays and Array Methods

/*
****TASKS******
Replace7,9,11 with 17,19,11
Insert 100 in the beginning
Insert 200 in last but one position
Add 1000 at the end
Insert 0 in the middle use arr.length to find middle
*/

/* let arr = [5, 8, 10, 7, 9, 11];
console.log('OrignalArr:', arr) */

// T-1

/* let arrReplace = arr.splice(3,6, 17, 19, 111)
console.log("T-1: ",arr) */

// T-2
/* 
let addArr = arr.unshift(100)
console.log("T-2: ",arr) */

// T-3


/* let newVal = arr.splice(arr.length -1, 0, 200)
console.log("T-3: ",arr) */

// T-4

/* let addEnd = arr.push(100);
console.log("T-4: ",arr) */


// T-5

/* let addMiddle = Math.floor(arr.length / 2 )
let newArr = arr.splice(addMiddle, 0, 0)
console.log("T-5: ",arr) */


/* const user = {
    name : 'John',
    email:'John@123mail.com',
    age:  25,
    country:"USA",
    city :"New York",
    isAdmin:true,
    greetUser(){
        return console.log(`Hello ${this.name}, welcome to my website`)
    },
}
console.log(user)
let key = 'age'
user[key] = 30
console.log(user.greetUser()) 
user.isMarried = true;
console.log(user.email)
console.log(user)

let i

for(i = 0; i <=5; i++){
    console.log(i)
}
 */
// loop in reverse method;

/* for(i =10; i >= 1; i--){
   if(i === 1){
    console.log('START')
   }else{
    console.log(i)
   }
}
 

 function takkalBook(){
    return new Promise((resolve, reject) => {
        let bookSuccess = false;
        if(bookSuccess){
            resolve(850)
        }else{
            reject()
        }
     })
 }

 takkalBook().then((amt) => {
    console.log(`Thanks buddy will share the amount Rs.${amt} to you`)
 })
 .catch(()=> {
    console.log('Thansks for trying will book a bus')

 })
 */



//  Fetch API 

// Example - 1
/* 
fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res) => res.json())
.then((msg) => console.log(msg[0].setup,msg[0].punchline))
.catch((err) => console.log(err)) */

// Example - 2 
/* 
fetch('https://api-thirukkural.vercel.app/api?num=20')
.then((res) => { 
    if(res.ok){
        console.log('success')
    }else{
        console.log('Failed')
    }
    return res.json()
})
.then((msg) => console.log(msg.line1,msg.line2,msg.eng_exp))
.catch((err) => console.log(err)) */


// JSon Placeholder

// get, post method

// get Method

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 */

// post Method

/* fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId : '3', title : "New Todo", completed : false
    })
})
      .then(response => response.json())
      .then(json => console.log(json))
 */

// Example-3

fetch('https://dog.ceo/api/breeds/image/random')
.then((res) =>{
   if(res.ok){
    console.log("Success")
   }else{
    console.log('Failed')
   }
     return res.json()
})
.then((img) => console.log(img.message,img.status))
.catch((err) => console.log(err))