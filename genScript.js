//import { createPassword } from "./genPassword";

const output = document.getElementById('output');
const rangeNumber = document.getElementById('range-words');
const checkers = document.querySelectorAll('input[type="checkbox"]');

function letterUpper(){
    let randUpper = Math.round(Math.random() * (90-65) + 65);
    return String.fromCharCode(randUpper);
}

function lowerCase(){
    let randCase = Math.round(Math.random() * (122-97) + 97);
    return String.fromCharCode(randCase);
}

function simbolyKeys(){
    let randKeys = Math.round(Math.random() * (47-33) + 33);
    return String.fromCharCode(randKeys);
}

document.addEventListener('submit', e =>{
    e.preventDefault();
    let password = '';

    for(checker of checkers){
        if(checker.checked){
            if(checker.id === "upper-letter"){
                for(let index = 0; index < rangeNumber.value; index++){
                    password += letterUpper();
                }
            }
    
            if(checker.id === "down-letter"){
                if(password){
                    for (let i = 0; i < password.length; i++) {
                        password = password.replace(password[i],lowerCase());
                        i++;
                    }
                }else{
                    for(let index = 0; index < rangeNumber.value; index++){
                        password += lowerCase(); 
                    }
                }
            }
    
            if(checker.id === "numbers"){
                if(password){
                    for (let i = 0; i < password.length; i++) {
                        let randNum = Math.round(Math.random() * (9-0) + 0);
                        password = password.replace(password[i+2],randNum);
                        i+=2;
                    }
                }else{
                    for(let index = 0; index < rangeNumber.value; index++){
                        let randNum = Math.round(Math.random() * (9-0) + 0);
                        password += randNum; 
                    }
                }
            }
    
            if(checker.id === "simboly"){
                if(password){
                    for (let i = 0; i < password.length; i++) {
                        password = password.replace(password[i+3],simbolyKeys());
                        i+=3;
                    }
                }else{
                    for(let index = 0; index < rangeNumber.value; index++){
                        password += simbolyKeys(); 
                    }
                }
            }
        }
        }
    
    output.innerText = password ? password:'NADA MARCADO';
    }
)



