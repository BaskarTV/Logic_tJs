
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

    /* Adding date / month / year and day */
     let date = dateTime.getDate();
     let month = dateTime.getMonth() + 1;
     let year = dateTime.getFullYear()
     let weekDay =  getWeekDay(dateTime.getDay())
     console.log(day)

     document.querySelector('#date').innerHTML = `${padZero(date)}/${padZero(month)}/${year}`
     document.querySelector('#day').innerHTML = `- ${weekDay}`   


}

/*PadZero function for Adding '0' to the begining in the time so the time will display in two digits */

function padZero(num){
    return num < 10 ? '0' + num : num
}

/* Adding weekDays */

function getWeekDay(day) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[day];
}

/* Interval function for calling the displayTime function every 1000 milliseconds */

setInterval(displayTime,1000)