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

export function createPassword(checkers, size, output){
    let password = '';

    for(let checker of checkers){
        if(checker.checked){
            if(checker.id === "upper-letter"){
                for(let index = 0; index < size; index++){
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
                    for(let index = 0; index < size; index++){
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
                    for(let index = 0; index < size; index++){
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
                    for(let index = 0; index < size; index++){
                        password += simbolyKeys(); 
                    }
                }
            }
        }
    }
    
    output.innerText = password ? password:'NADA MARCADO';
}
