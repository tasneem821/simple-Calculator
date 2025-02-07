


let answer = document.getElementById('answer')

function add(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if(num1==""||num2==""){
        answer.innerText='Please enter valid number'
       answer.style.color = '#dc3545'
       answer.style.backgroundColor ='#ffebee'
        }
    else{
   let sum = Number(num1) + Number(num2)
    answer.innerText = `result :${sum} `
      answer.style.color = '#28a745'
        answer.style.backgroundColor ='white'
    }

 
    event.preventDefault();
}
function subtract(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if(num1==""||num2==""){
        answer.innerText='Please enter valid number'
         answer.style.color = '#dc3545'
       answer.style.backgroundColor ='#ffebee'
        }
        else{
       let sum = Number(num1) - Number(num2)
        answer.innerText = `result :${sum} `
          answer.style.color = '#28a745'
        answer.style.backgroundColor ='white'
        }
    event.preventDefault();
}
function multiply(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if(num1==""||num2==""){
        answer.innerText='Please enter valid number'
         answer.style.color = '#dc3545'
       answer.style.backgroundColor ='#ffebee'
        }
        else{
       let sum = Number(num1) * Number(num2)
        answer.innerText = `result :${sum} `
          answer.style.color = '#28a745'
        answer.style.backgroundColor ='white'
        }
    event.preventDefault();
}
function divide(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if(num1==""||num2==""){
        answer.innerText='Please enter valid number'
         answer.style.color = '#dc3545'
       answer.style.backgroundColor ='#ffebee'
        }
        else{
       let sum = Number(num1) / Number(num2)
        answer.innerText = `result :${sum} `
        answer.style.color = '#28a745'
        answer.style.backgroundColor ='white'
        }
    event.preventDefault();
}