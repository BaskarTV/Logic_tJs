// calling id's for the calling of the each element to be used in

const inputVal = document.querySelector('#cityinput');
const btn = document.querySelector('#add');
const city = document.querySelector('#cityoutput');
const descp = document.querySelector('#description');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');

apiKey = "3045dd712ffe6e702e3245525ac7fa38"


// kelvin to celcious 1 kelvin is equal to -272.15 Celcius

function convertion(kel){
    return (kel - 272).toFixed(2)
}

// adding eventListner to btn for the Apicall using fetch method

/* btn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        const cityName = data.name
        const description= data.weather['0']['description'];
        const temperature=data.main['temp']
        const windSpd = data.wind['speed']
        city.innerHTML = `Weather of <span>${cityName}</span>`
        temp.innerHTML = `Temperature: <span>${convertion(temperature)}</span>`
        descp.innerHTML=`Sky Conditions: <span>${description}</span>`
        wind.innerHTML=`Wind speed: <span>${windSpd}</span>`
           
    })
  .catch(err => alert('You entered wrong city name',err))

})
 */


// converting fetch with async await with try catch method

btn.addEventListener('click', async ()=> {
    try{ 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=${apiKey}`);

        if(response.ok){
            const data = await response.json();
            const cityName = data.name
            const description= data.weather['0']['description'];
            const temperature=data.main['temp']
            const windSpd = data.wind['speed']
            city.innerHTML = `Weather of <span>${cityName}</span>`
            temp.innerHTML = `Temperature: <span>${convertion(temperature)}</span>`
            descp.innerHTML=`Sky Conditions: <span>${description}</span>`
            wind.innerHTML=`Wind speed: <span>${windSpd}</span>`
            
        }else{
            // Handle error when response is not OK (eg... 404)
            city.innerHTML = 'City not found';
            temp.innerHTML = '';
            descp.innerHTML = '';
            wind.innerHTML = '';
        }
    }
    catch (error){
        console.error('Error', error);
        city.innerHTML = 'An error occured';
        temp.innerHTML = "";
        descp.innerHTML = "";
        wind.innerHTML = "";
    }
})