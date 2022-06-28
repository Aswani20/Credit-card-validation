function cardnumber(inputtxt)
{
//   var cardno = /^3[47][0-9]{13}$/;
// var cardno = /^3[47]\d{13}$/;
var cardno = /^(34|37)[0-9]{13}$/;


  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Amercican Express credit card number!");
        return false;
        }
}


// function valid(){
//     var number=prompt("Enter the number");
//     var len=number.length;

//     if(len = 15){
//         var check= number.slice(0,2);
//         if(check == "34" || check == "37"){
//             alert("Your credit number accepted");
//         }
//         else{
//             alert("Invalid credit number")
//         }
//     }
//     else{
//         alert("Not a valid Visa credit card number!");
//     }

// }
// valid();
