var displayValue = document.getElementById('displayId');
var buttonNumbers = document.querySelectorAll('.number');
var buttonOperators = document.querySelectorAll('.operator');
var equal = document.getElementById('equalId');

var selector = document.querySelectorAll('.inputCheck');


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
        
            const value1 = parseFloat(this.value1);
            const value2 = parseFloat(this.value2);
            console.log(this.operator);
            
    
            if( isNaN(value1) ||isNaN(value2)) return
            this.value1 = this.calculator[this.operator](value2, value1);
            console.log(this.value1);
            console.log(this.value2);
            this.operator = undefined;
            this.value2 = '';
            this.printValue();
        
       
        
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
equal.addEventListener('click', ()=>{
    display.operation();
});


// ----------------Theme--------------

$(document).ready(function() {
    
 
    function selectTheme(themeValue){

        switch (themeValue){
            case "1":
                console.log("asdhasdfewfksdcdsj")
        
            break;
            case "2":
                removeAdd ("3","2")
        
            break;
            case "3":
                console.log("sdf")
        
        
            break;
        }
    
        function removeAdd (remove, add){
            document.querySelector('.body').classList.remove(`bodyTheme${remove}`)
            document.querySelector('.option').classList.remove(`optionTheme${remove}`)
            document.querySelector('.display').classList.remove(`displayTheme${remove}`)
            document.querySelector('.keyboard').classList.remove(`keyboardTheme${remove}`)
            document.querySelector('.number').classList.remove(`numberTheme${remove}`)
            document.querySelector('.operator').classList.remove(`operatorTheme${remove}`)
            document.querySelector('.blue').classList.remove(`blueTheme${remove}`)
            document.querySelector('.red').classList.remove(`redTheme${remove}`)
                
        
            document.querySelector('.body').classList.add(`bodyTheme${add}`)
            document.querySelector('.option').classList.add(`optionTheme${add}`)
            document.querySelector('.display').classList.add(`displayTheme${add}`)
            document.querySelector('.keyboard').classList.add(`keyboardTheme${add}`)
            document.querySelector('.number').classList.add(`numberTheme${add}`)
            document.querySelector('.operator').classList.add(`operatorTheme${add}`)
            document.querySelector('.blue').classList.add(`blueTheme${add}`)
            document.querySelector('.red').classList.add(`redTheme${add}`)
        
        
        
        
        }
        
        
        }
  
      selector.forEach(input =>{
        input.addEventListener('click', ()=>{
            selectTheme(input.value);
        });
    });
    


  });

   