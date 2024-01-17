let form = document.querySelector('.calculator form')
let display = document.querySelector('#display input')
let storge =0;
form.addEventListener("click",changeDisplayText)

function changeDisplayText(e){
    switch (e.target.className) {
        case 'AC':
            display.value = "";
            storge = 0;
        break;
        case 'button':
        case 'oprator':  
            display.value += e.target.value;
        break;    
        case 'DE':
           display.value= display.value.toString().slice(0,-1);
        break;
        case 'oprator':
            performOprations(e);
            break;
        case 'equal':
            console.log('equal')
            break
    }
    // if(e.target.className == 'button'){
    //     display.value += e.target.value;

    // }else if(e.target.id == 'AC'){
    //     display.value = "";
    // }else if(e.target.id=='DE'){
        
    //     display.value= display.value.toString().slice(0,-1);
   
    // }
}

function performOprations(e){
 let values = display.value.split(/\W/)
switch (e.target.value) {
    case '+':
       
        storge = values.reduce((total, currentValue) => {
            return total + Number(currentValue);
        }, 0)
        console.log("fgd")
    break;
    case '-':
    
    break;    
    case '/':
      
    break;
    case '*':
       
    break;
   
}


}