let select = document.querySelectorAll('.currency');
let btn = document.getElementById('btn');
let input = document.getElementById('input');

// Fetching currency URL from FrankFurter.com

fetch('https://api.frankfurter.app/currencies')
.then(res =>  res.json()) 
.then(res => displayDropDown(res))
.catch(err => console.error(err))


// Display the dorpdown with the countries name

function displayDropDown(res){
    let curr = Object.entries(res);
    for(let i=0;i<curr.length; i++){
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }
}


// Adding EventListner for Api Call with value and curriency convert

btn.addEventListener('click',()=> {
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let inputVal = input.value;

    if(curr1 === curr2){
        document.getElementById('err_msg').innerHTML = 'Choose diffrent countries'
    }else if(inputVal === ''){
        document.getElementById('err_msg').innerHTML = 'Please Enter Amount to convert'
    }else{
        convert(curr1,curr2,inputVal)
        document.getElementById('err_msg').innerHTML = ''
    }
})

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then(data => {document.getElementById('result').value = Object.values(data.rates)[0]})
}

