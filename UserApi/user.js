// Getting placeholders by id for messages to be displayed 

const title = document.querySelector('#title')
const message = document.querySelector('#message')


// adding url to separate variable 


const baseUrl = 'https://jsonplaceholder.typicode.com/posts'


// generate a random post id

// const randomPostId = Math.floor(Math.random() * 100) + 1;


// Construct the URL with the random post ID

// const url = `${baseUrl}/${randomPostId}`



// async function for API call 



async function fetchData () {
  try{
     const response = await fetch(`${baseUrl}?_limit=10`)
     if(response.ok){
       const data = await response.json()
        console.log(data)
       data.forEach((post) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h2>${post.title}</h2>
                           <p>${post.body}</p>      `
          document.body.appendChild(card)
       }) 
     }
  }
  catch(err){
    console.error('Error', err)
  }

}

fetchData()