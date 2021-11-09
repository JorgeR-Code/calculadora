var displayValue = document.getElementById('displayId');
var buttonNumbers = document.querySelectorAll('.number');
var buttonOperators = document.querySelectorAll('.operator');


class Calculator {
    add(num1, num2 ){
        return num1 + num2;
    }
    sub(num1, num2 ){
        return num1 - num2;
    }
    divi(num1, num2 ){
        return num1 / num2;
    }
    mult(num1, num2 ){
        return num1 * num2;
    }
}

class Display {
    constructor(displayValue){
        this.displayValue = displayValue;
        this.calculator = new Calculator();
        this.value1 = '';
        this.value2 = '';
    }

    addNumber(number){
        if(number === '.' && this.value1.includes('.')) return
        this.value1 = this.value1.toString() + number.toString();
        this.printValue();

    }

    printValue(){
        this.displayValue.textContent = this.value1;
    }

}


const display = new Display(displayValue);

buttonNumbers.forEach(button =>{
    button.addEventListener('click', ()=>{
        display.addNumber(button.innerHTML);
    });
});