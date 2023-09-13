let timer;
let minutes =0;
let seconds = 0;
let isRunning = false;

// Function to update the timer display

function updateTimer(){
    document.getElementById('min').textContent = String(minutes).padStart(2, '0');
    document.getElementById('sec').textContent = String(seconds).padStart(2,'0');

}

// Function to start the stopwatch

function startTimer(){
    if(!isRunning){
        isRunning = true;
        timer = setInterval(function(){
            seconds++;
            if(seconds === 60){
                seconds = 0;
                minutes++;
            }
            updateTimer();
        },500)
    }
}

// Function to stop the stopwatch

function stopTimer(){
    clearInterval(timer);
    isRunning= false;
}

// Function to reset the stopwatch

function resetTimer(){
    stopTimer();
    minutes = 0;
    seconds=0;
    updateTimer();
}

// Event listeners for the buttons

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click',stopTimer);
document.getElementById('reset').addEventListener('click',resetTimer);

