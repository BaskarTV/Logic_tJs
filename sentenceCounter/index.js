function calculate(){
    const input = document.getElementById('comments').value;
    let strCount = input.trim().split(/\s+/).length;
    // console.log(strCount)
    let result = document.getElementById('result')
    result.innerHTML =`${strCount} word${strCount !== 1 ? 's' : ''}`;
    
}

function clearText(){
    document.getElementById("comments").value="";
    document.getElementById("result").innerText="0 word";
}