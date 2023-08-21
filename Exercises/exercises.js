// Topic map, filter, reduce 

// Exercise - 1
const arr = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 13]

const uniqueValues = arr.reduce((acc, currVal) => {
    if(!acc.includes(currVal)){
        acc.push(currVal)
    }
    return acc
},[])

console.log(uniqueValues)

// Exercise - 2 

const userName = "Robert Andrew Geroge";

const firstLetter = userName.split(" ");

const abbrivation = firstLetter.map((part) => part[0].toUpperCase()).join("");

console.log(abbrivation);

// Exercise - 3

const input = [6, -5, 7, -2, 4, 6, -1]
let output = 0

const sumOfNum = input.map((num) => {
  if(num > 0){
    output += num
  }
  return num
    
})

console.log(output)

