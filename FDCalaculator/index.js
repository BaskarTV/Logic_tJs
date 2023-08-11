function fdRate(){
    const  month = Number(document.getElementById('input').value);
    // console.log(month)
    let rate = 0;
    const result = document.getElementById('result')

    if(month < 3){
        rate = 5.8
    }else if(month >=3 && month <= 6){
        rate = 6.5
    }else if(month >= 7 && month <=9){
        rate = 6.8
    }else{
        rate = 7   
    }
     result.innerHTML = `Your FD Rate is ${rate}%`    
     
}