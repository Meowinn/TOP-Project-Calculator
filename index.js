

const buttons = document.querySelectorAll(`button`);
const display = document.getElementById(`subContainer`);
let input = document.getElementById(`subC`);
let input2 = document.getElementById(`subC`).value;

//for button clicks
for (const digits of buttons) {
    digits.addEventListener(`click`, function() {
        let numbers = this.innerHTML;
        //console.log(numbers)
        enterDigit(numbers);
    })
}


//I can use input.value to record the display then convert to number?
 
//switch keys are binded to class 

function enterDigit(key) {
   
    switch(key) {
        case "1":
            input.value += key;
            input2 += key;
             
            break;

        case "2":
            input.value += key;
            input2 += key;
        //return console.log(Number(input.value += key));
            break;

        case "3":
            input.value += key;
            break;

        case "4":
            input.value += key;
            break;

        case "5":
            input.value += key;
            break;

        case "6":
            input.value += key;
            break;

        case "7":
            input.value += key;
            break;

        case "8":
            input.value += key;
            break;

        case "9":
            input.value += key;
            break;

        case "0":
            input.value += key;
            break;    
            
        case "+":
            input.value += key;
            break;

        case "₋":
            input.value += `-`
            break;

        case "x":
            input.value += key;
            break;
        
        case "÷":
            input.value += key;
            break;    

        case "=":
            let equation = input.value;

            let result = +equation.split("+")[0] + +equation.split("+")[1]

           

            console.log(result);
            input.value = result;
            break;
        
        case "•":
            input.value += `.`;
            break;
        
        case "c":
           input.value = ``;
            break;
        default:
    }
}