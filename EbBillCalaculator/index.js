function ebBillCal(){
    const units = Number(document.querySelector('#input').value);
    const result = document.querySelector('#result');
    let bill = 0;

    if(units <= 50){
        bill = units * 0.75;
    }else if (units <= 150){
        bill = 50 * 0.75 + (units - 50) * 1.0;
    }else if(units <=250){
        bill = 50 * 0.75 +  100 * 1.0 + (units - 150) * 1.3;

    }else{
        bill = 50 * 0.75 + 100 * 1.0 + 250 * 1.3 + (units - 250) * 1.5;
    }
     
      result.innerHTML = `Amount for the ${units} unit is Rs.${bill.toFixed(2)}`
}

