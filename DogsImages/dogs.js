// Get reference elements
const dogImageElement = document.querySelector('#dogImage');
const dogElem1 = document.querySelector('#dogImage1');
const dogElem2 = document.querySelector('#dogImage2');
const fetButton = document.querySelector('#fetchButton');

// Event Listner to the button

fetButton.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(data => {
        dogImageElement.src = data.message[0];
        dogElem1.src = data.message[1];
        dogElem2.src = data.message[2];
    })
    .catch(error => {
        console.error('Error fetching dog image', error)
    })
}
)
