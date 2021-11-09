var displayValue = document.getElementById('displayId');
var buttonNumbers = document.querySelectorAll('.number');
var buttonOperators = document.querySelectorAll('.operator');


class Calculator {
    add(num1, num2){
        return num1 + num2;
    }
    sub(num1, num2){
        return num1 - num2;
    }
    divi(num1, num2){
        return num1 / num2;
    }
    mult(num1, num2){
        return num1 * num2;
    }
}

class Display {
    constructor(displayValue){
        this.displayValue = displayValue;
        this.calculator = new Calculator();
        this.operator = undefined;
        this.value1 = '';
        this.value2 = '';
        this.simbols = {
            add: '+',
            sub: '-',
            divi: '/',
            mult: 'x'
        }
    }

    delete(){
        this.value1 = this.value1.toString().slice(0, -1);
        this.printValue();
    }

    reset(){
        this.value1 = '';
        this.value2 = '';
        this.operator = undefined;
        this.printValue();

    }

    conca(typeOperation){
        if(this.value1 === '') return;
        if(this.value1 !== ''){
            this.operation();
            this.operator = typeOperation;
            this.value2 = this.value1;
            this.value1 = '';
        }
     
        
        

        // this.operator !== 'equal' && this.operation();
        // this.operator = typeOperation;
        // this.printValue();
    }


    addNumber(number){
        if(number === '.' && this.value1.includes('.')) return
        if(number === 'DEL' || number === 'RESET' ) return
        this.value1 = this.value1.toString() + number.toString();
        this.printValue();

    }

    printValue(){
        this.displayValue.textContent = this.value1;
        // this.displayValue.textContent = `${this.value1} ${this.simbols[this.operator] || ''} `;
        
    }

    operation(){
        var calcu;
        const value1 = parseFloat(this.value1);
        const value2 = parseFloat(this.value2);

        

        if( isNaN(value1) ||isNaN(value2)) return
        this.value1 = this.calculator[this.operator](value2, value1);
        this.operator = undefined;
        this.value2 = '';
        this.printValue();
        console.log(this.value1);
        console.log(this.value2);
    }



}


const display = new Display(displayValue);

buttonNumbers.forEach(button =>{
    button.addEventListener('click', ()=>{
        display.addNumber(button.innerHTML);
    });
});

buttonOperators.forEach(button =>{
    button.addEventListener('click', ()=>{
        display.conca(button.value);
    });
});