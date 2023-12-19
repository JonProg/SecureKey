import { createPassword } from "./genPassword";
import './assets/css/style.css';

const output = document.getElementById('output');
const rangeNumber = document.getElementById('range-words');
const checkers = document.querySelectorAll('input[type="checkbox"]');

document.addEventListener('submit', e =>{
        e.preventDefault();
        createPassword(checkers,rangeNumber.value,output);
    }
)



