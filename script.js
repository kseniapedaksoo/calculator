

function setInnitialState(){
    document.getElementById('display').innerText = '0'
    document.getElementById('btn-1').addEventListener('click', pressOne)
    document.getElementById('btn-2').addEventListener('click', pressTwo)
    document.getElementById('btn-3').addEventListener('click', pressThree)
    document.getElementById('btn-4').addEventListener('click', pressFour)
    document.getElementById('btn-5').addEventListener('click', pressFive)
    document.getElementById('btn-6').addEventListener('click', pressSix)
    document.getElementById('btn-7').addEventListener('click', pressSeven)
    document.getElementById('btn-8').addEventListener('click', pressEight)
    document.getElementById('btn-9').addEventListener('click', pressNine)
    document.getElementById('btn-decimal-point').addEventListener('click', pressDecimal)
}

window.onload = setInnitialState


function pressOne(){
   if(document.getElementById('display').innerText === '0'){
        // set to 1    
        document.getElementById('display').innerText = '1'
   }else{
        //add 1 to the right of what is curently on the display('1' + ... - add to the left)
        document.getElementById('display').innerText = document.getElementById('display').innerText + '1' 
   }
}

function pressTwo(){
   if(document.getElementById('display').innerText === '0'){ 
        document.getElementById('display').innerText = '2'
   }else{
        document.getElementById('display').innerText = document.getElementById('display').innerText + '2' 
   }
}

function pressThree(){
     if(document.getElementById('display').innerText === '0'){ 
          document.getElementById('display').innerText = '3'
     }else{
          document.getElementById('display').innerText = document.getElementById('display').innerText + '3' 
     }
  }
  
  function pressFour(){
     if(document.getElementById('display').innerText === '0'){ 
          document.getElementById('display').innerText = '4'
     }else{
          document.getElementById('display').innerText = document.getElementById('display').innerText + '4' 
     }
  }

  function pressFive(){
     if(document.getElementById('display').innerText === '0'){ 
          document.getElementById('display').innerText = '5'
     }else{
          document.getElementById('display').innerText = document.getElementById('display').innerText + '5' 
     }
  }

  function pressSix(){
     if(document.getElementById('display').innerText === '0'){ 
          document.getElementById('display').innerText = '6'
     }else{
          document.getElementById('display').innerText = document.getElementById('display').innerText + '6' 
     }
  }

  function pressSeven(){
     if(document.getElementById('display').innerText === '0'){ 
          document.getElementById('display').innerText = '7'
     }else{
          document.getElementById('display').innerText = document.getElementById('display').innerText + '7' 
     }
  }

  function pressEight(){
     if(document.getElementById('display').innerText === '0'){ 
          document.getElementById('display').innerText = '8'
     }else{
          document.getElementById('display').innerText = document.getElementById('display').innerText + '8' 
     }
  }

  function pressNine(){
     if(document.getElementById('display').innerText === '0'){ 
          document.getElementById('display').innerText = '9'
     }else{
          document.getElementById('display').innerText = document.getElementById('display').innerText + '9' 
     }
  }

  function pressDecimal(){
     let currentDisplayValue = document.getElementById('display').innerText
     let currentDisplayValueLength = currentDisplayValue.length
     let lastSymbol = currentDisplayValue[currentDisplayValueLength - 1]

     if(lastSymbol !== '.' && !currentDisplayValue.includes('.')){
          //if last symbol IS NOT a desimal point AND currentDisplayValue DOES NOT include '.'
          document.getElementById('display').innerText = document.getElementById('display').innerText + '.'
     }

     // if(lastSymbol != '.'){
     //      //if last symbol is not a desimal point
     //      if(!currentDisplayValue.includes('.')){
     //           document.getElementById('display').innerText = document.getElementById('display').innerText + '.'
     //      }
     // }
  }