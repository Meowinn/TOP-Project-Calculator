

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
};
 
function add(num1, num2) {
    return num1 + num2;
  };

function subtract(num1, num2) {
    return num1 - num2;
  };

function multiply(num1, num2) {
    return num1 * num2;
  };

function divide(num1, num2) {
    return num1 / num2;
  };

function operate(num1, num2, operator) {
return input.value = operator(num1, num2)
  };


function enterDigit(key) {
    switch(key) {
        case "1":
            input.value += key;
            break;

        case "2":
            input.value += key;
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
            input.value += `*`;
            break;
        
        case "÷":
            input.value += `/`;
            break;    

        case "=":
            
            let equation = input.value;

            let arr = equation.split(/[^0-9.]/g).map(function(str){
                return parseFloat(str);
            });
         
            let num1 = arr[0];
            let num2 = arr[1];

            if(equation.includes(`+`)){
                operate(num1, num2, add);
            }
            if(equation.includes(`-`)) {
                operate(num1, num2, subtract)
            };
          
            if(equation.includes(`*`)) {
                operate(num1, num2, multiply)
            };

            if(equation.includes(`/`)) {
                operate(num1, num2, divide)
            };
          



        /*
            
            if (equation.includes(`+`)){
            let arr = equation.split(`+`).map(function(str){
                return parseFloat(str);
            });
            let final = arr.map(function(x){
                return x+=arr[arr.length-1];
            })
            input.value = final[0];
            };

          */  
            /*            
            let result = +equation.split("+")[0] + +equation.split("+")[1]
            console.log(result);
            input.value = result;
            */
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


