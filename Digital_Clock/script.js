
const merdian = document.querySelector('#ampm')

function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let mins =padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());

    if(hr > 12){
        hr = hr -12;
        merdian.innerHTML = 'PM';
    }
    document.querySelector('#hours').innerHTML = padZero(hr)
    document.querySelector('#mins').innerHTML = mins
    document.querySelector('#seconds').innerHTML =sec

}

function padZero(num){
    return num < 10 ? '0' + num : num
}


setInterval(displayTime,1000)