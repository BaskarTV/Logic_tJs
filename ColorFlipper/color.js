//  Exercise solution by me

 const button = document.getElementById('btn');
const body = document.getElementById('wrap');

button.addEventListener('click', function colorPicker() {
  let colorDisplay = document.getElementById('color');
  const colorArray = '0123456789abcdef';
  let hexColor = [];

  for (let i = 0; i < 6; ++i) {
    let index = Math.floor(Math.random() * 15);
    hexColor.push(colorArray[index]);
    colorDisplay.innerHTML = `#${hexColor.join('').toUpperCase()}`;
    body.style.backgroundColor = `#${hexColor.join('')}`;
  }

  return '#' + hexColor.join('');
});
 

// Trainer solution

/* const btn = document.getElementById("btn");
const body = document.getElementById("wrap");
const colortext = document.getElementById("color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function changeBg() {
  let hexColor = "#";
  for (let i = 1; i <= 6; i++) {
    hexColor += randomHexValue();
  }
  body.style.background = hexColor;
  colortext.textContent = `${hexColor}`;
});
function randomHexValue() {
  let randomIndex = Math.floor(Math.random() * 16);

  return hex[randomIndex];
} */


// Exercise for the same section adding here 

/* const select = document.getElementById('input');
const arr = ['ECE', 'CSE', 'IT', 'EEE', 'MECH', 'CIVIL'];

for (let i = 0; i < arr.length; i++) {
    const option = document.createElement('option'); // Create a new <option> element
    option.value = arr[i]; // Set the value of the option
    option.textContent = arr[i]; // Set the text content of the option
    select.appendChild(option); // Append the option to the select element
}
 */

// same Exercise using forEach method

const arr = ['ECE', 'CSE', 'IT', 'EEE', 'MECH', 'CIVIL'];

arr.forEach(val => {
    const opt = document.createElement('option');
    opt.textContent = val
    opt.value = val
    document.getElementById('branch').appendChild(opt)
})


// Exercise of callback same in forEach method

const arrValue = [6, -5, 7, -2, 4, 6, -1]
let result = 0
arrValue.forEach(sum => {
   
    if(sum >= 0){
       console.log(result += sum)
    }
})