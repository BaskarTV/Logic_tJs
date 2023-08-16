const button = document.querySelector('button')


button.addEventListener('click',function eleCheck(){

    const eligibleChecker = document.querySelector('input[name="education"]:checked').value
    const result =  document.querySelector('.output')
    let outputRes;
    switch(eligibleChecker){
        case 'HighSchool':
        case 'UG':
        outputRes = 'You are eligible for the Job';
        break;
        case 'Illiterate':
        case 'PG':
        case 'Doctrate':
        outputRes = 'You are not eligible for the Job';
        break;
    }
    result.innerHTML = '';
    result.innerHTML = outputRes;

})