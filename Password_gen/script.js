const symbolEl= document.getElementById("symbol");
const generateEl= document.getElementById("generate");
const numberEl= document.getElementById("number");
const lowerEl= document.getElementById("lower");
const upperEl= document.getElementById("upper");
const lenEl= document.getElementById("len");
const copyEl= document.getElementById("copy");
const pwEl= document.getElementById("pw");


const upperLetters='ABCDEFGHIJKLMNOPQRSTUVXWYZ';
const lowerLetters='abcdefghijklmnopqrstuvxwyz';

const numbers='0123456789';

const symbols='!@#$%^&*()_+=';

function getLowecase(){
    return lowerLetters[Math.floor(Math.random() 
        * lowerLetters.length)];
}
function getUppercase(){
    return upperLetters[Math.floor(Math.random() 
        * upperLetters.length)];
}
function getNumbers(){
    return numbers[Math.floor(Math.random() 
        * numbers.length)];
}
function getSymbols(){
    return symbols[Math.floor(Math.random() 
        * symbols.length)];
}


function generatePass(){
    const len = lenEl.value
    let password="";

    if(upperEl.checked){
       password+=getUppercase();
     }
     if(lowerEl.checked){
        password+=getLowecase();
      }
     if(numberEl.checked){
        password+=getNumbers();
      }
     if(symbolEl.checked){
        password+=getSymbols();
      }

    for(let i=password.length; i < len; i++){
        const x= generateX();
        password+= x;
    }


    pwEl.innerText= password;
}

function generateX(){
    const xs=[];
    if(upperEl.checked){
       xs.push(getUppercase());
    }
    if(lowerEl.checked){
        xs.push(getLowecase());
     }
    if(numberEl.checked){
        xs.push(getNumbers());
     }
    if(symbolEl.checked){
        xs.push(getSymbols());
     }

     if(xs.length === 0){
         return "";
     }
    return xs[Math.floor(Math.random() * xs.length)];
}
generateEl.addEventListener('click', generatePass);

copyEl.addEventListener('click',()  =>{
   const textarea=document.createElement('textarea');
   const password = pwEl.innerText;
   
   if(!password){return;}

   textarea.value = password;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand('copy');
   textarea.remove();
   alert('Palavra Passe Copiada');
});