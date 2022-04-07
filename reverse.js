

function reverseLetters(){


 let reverseId = document.getElementById('reverseId');



 const letters = ['A','B','C','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 
 let low = 0;

 let high = letters.length-1;

     while(low < high){


         let temporary =  letters[low];

         letters[low++] = letters[high];

         letters[high--] = temporary;




     
     }

    return  reverseId.innerHTML =  letters;


   
}

 console.log(reverseLetters().join(','));
