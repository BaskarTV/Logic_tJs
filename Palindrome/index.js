function checkPalindrome(){
   const string = document.querySelector('#input').value.replace(/\s/g,'').toLowerCase();
//    console.log(string) 
   const result = document.querySelector('#result');
   const reverseString = string.split('').reverse().join('');
//    console.log(reverseString)
   if (string !== reverseString){
      result.innerHTML = `It is a Palindrome`   
}else{
      result.innerHTML = `It is not a Palindrome`
}
}

