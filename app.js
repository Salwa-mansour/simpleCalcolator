let form = document.querySelector('.calculator form');
let opratorBtns = document.querySelectorAll('.calculator .oprator');
let display = document.querySelector('#display input');
let storge =0;

form.addEventListener("click",changeDisplayText)
if(display.value===""){
    disableBtns();
   }

function changeDisplayText(e){
    switch (e.target.className) {
        case 'AC':
            display.value = "";
            storge = 0;
            disableBtns();
        break;
        case 'button':
            
            display.value += e.target.value;
            opratorBtns.forEach(btn=>{
                btn.classList.remove('disable');
            })
        break; 
        case 'oprator':  
            display.value += e.target.value;
            disableBtns();
    break;    
        case 'DE':
           display.value= display.value.toString().slice(0,-1);
           if(display.value===""){
            disableBtns();
           }
        break;
        case 'equal':
          performOprations();
        break;
    }
   
}

function performOprations(e){
 let values = display.value.split(/[+\-/*]/g);
 let opartors =display.value.split(/\d+/g);
 opartors.shift();opartors.pop();//remove empty strings

 if(values[0]!=null ){

  storge=Number(values[0]) //set inial value
        for(i=0;i<opartors.length;i++){
            switch (opartors[i]) {
                case '+':
                console.log(`${storge}+=${values[i+1]}`) 
                storge+=Number(values[i+1]); 
                break;
                case '-':
                console.log(`${storge}-=${values[i+1]}`)
                storge-=Number(values[i+1]);
                break;    
                case '/':
                console.log(`${storge}/=${values[i+1]}`)
                storge/=Number(values[i+1]);
                break;
                case '*':
                console.log(`${storge}*=${values[i+1]}`)
                storge*=Number(values[i+1]);
                break;
            }
        }
 
 }

display.value=storge;
}

function disableBtns(){
    opratorBtns.forEach(btn=>{
       btn.classList.add('disable');
   })
   console.log('boo')
}