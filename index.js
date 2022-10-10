const buttons = document.querySelectorAll(`button`);
const display = document.getElementById(`subContainer`);
let input = document.getElementById(`subC`);
const signs = document.getElementsByClassName(`operands`);

//for button clicks
for (const digits of buttons) {
    digits.addEventListener(`click`, function() {
        let numbers = this.innerHTML;
        console.log(numbers)
        enterDigit(numbers)

    })
};

const disable = function () {
    for (let i = 0; i<signs.length; i++) {
        signs[i].disabled = true;
    }
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
        if (operator(num1,num2)%1==0) {
            return input.value = `=` + operator(num1, num2);
        } else {return input.value = `=` + operator(num1, num2).toFixed(2)};
  };



function enterDigit(key) {
    if(input.value.includes(`=`)) {
        input.value = input.value.substr(1, input.value.length);
    };
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

        case "–":
            input.value += `-`
            break;

        case "x":
            input.value += `*`;
            break;
        
        case "÷":
            input.value += `/`;
            break;    

        case "=":
            for(let y = 0; y<signs.length; y++){
                signs[y].disabled = false;
            };

            let equation = input.value;

            let arr = equation.split(/[^0-9.]/g).map(function(str){
                return parseFloat(str);
            });
            console.log(arr);
            let num1 = arr[0];
            let num2 = arr[1];

            if(equation.includes(`+`)){
                operate(num1, num2, add);
            };
            if(equation.includes(`-`)) {
                operate(num1, num2, subtract)
            };
          
            if(equation.includes(`*`)) {
                operate(num1, num2, multiply)
            };

            if(equation.includes(`/`)) {
                operate(num1, num2, divide)
            };
            break;
        
        case "•":
            input.value += `.`;
            break;
        
        case "c":
            for(let y = 0; y<signs.length; y++){
                signs[y].disabled = false;
            };
           input.value = ``;
            break;
            default:
            
    }
    if (input.value.includes(`+`)) {
        disable();
    }
    else if (input.value.includes(`-`)){
        disable();
    }
    else if (input.value.includes(`*`)) {
        disable();
    }
    else if (input.value.includes(`/`)) {
        disable();
    };
}





