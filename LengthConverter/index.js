function convert() {
  const cmVal = Number(document.getElementById("input").value);
  const inchVal = cmVal / 2.54;
  const result = document.getElementById("result");
//   console.log(result)
  result.innerHTML = inchVal.toFixed(3) + " Inches";
}

function tempConverter(){
 const celVal = Number(document.getElementById('input1').value);
 const farVal = (celVal * 9/5) + 32 
 const result = document.getElementById('result1')
//  console.log(result)
 result.innerHTML = farVal.toFixed(2)+ " &deg;F";

}