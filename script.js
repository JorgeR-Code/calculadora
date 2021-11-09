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

                var number = document.querySelectorAll('.number');
                var operator = document.querySelectorAll('.operator');
                var blue = document.querySelectorAll('.blue');

                for (var i = 0; i < number.length; i++) {
                    number[i].classList.remove(`numberTheme2`)
                }
                for (var i = 0; i < operator.length; i++) {
                    operator[i].classList.remove(`operatorTheme2`)
                }
                for (var i = 0; i < blue.length; i++) {
                    blue[i].classList.remove(`blueTheme2`)
                }
                document.querySelector('.body').classList.remove(`bodyTheme2`)
                document.querySelector('.option').classList.remove(`optionTheme2`)
                document.querySelector('.display').classList.remove(`displayTheme2`)
                document.querySelector('.keyboard').classList.remove(`keyboardTheme2`)
                document.querySelector('.red').classList.remove(`redTheme2`)
                

                for (var i = 0; i < number.length; i++) {
                    number[i].classList.remove(`numberTheme3`)
                }
                for (var i = 0; i < operator.length; i++) {
                    operator[i].classList.remove(`operatorTheme3`)
                }
                for (var i = 0; i < blue.length; i++) {
                    blue[i].classList.remove(`blueTheme3`)
                }
                document.querySelector('.body').classList.remove(`bodyTheme3`)
                document.querySelector('.option').classList.remove(`optionTheme3`)
                document.querySelector('.display').classList.remove(`displayTheme3`)
                document.querySelector('.keyboard').classList.remove(`keyboardTheme3`)
                document.querySelector('.red').classList.remove(`redTheme3`)
        
            break;
            case "2":
                removeAdd ("3","2")
                state = "2";
               
        
            break;
            case "3":
                removeAdd ("2","3")
                state = "3";
                
        
        
            break;
        }
    
        function removeAdd (remove, add){
            var number = document.querySelectorAll('.number');
            var operator = document.querySelectorAll('.operator');
            var blue = document.querySelectorAll('.blue');


            for (var i = 0; i < number.length; i++) {
                number[i].classList.remove(`numberTheme${remove}`)
            }
            for (var i = 0; i < operator.length; i++) {
                operator[i].classList.remove(`operatorTheme${remove}`)
            }
            for (var i = 0; i < blue.length; i++) {
                blue[i].classList.remove(`blueTheme${remove}`)
            }
            document.querySelector('.body').classList.remove(`bodyTheme${remove}`)
            document.querySelector('.option').classList.remove(`optionTheme${remove}`)
            document.querySelector('.display').classList.remove(`displayTheme${remove}`)
            document.querySelector('.keyboard').classList.remove(`keyboardTheme${remove}`)
            document.querySelector('.red').classList.remove(`redTheme${remove}`)
                
        
            document.querySelector('.body').classList.add(`bodyTheme${add}`)
            document.querySelector('.option').classList.add(`optionTheme${add}`)
            document.querySelector('.display').classList.add(`displayTheme${add}`)
            document.querySelector('.keyboard').classList.add(`keyboardTheme${add}`)
            document.querySelector('.red').classList.add(`redTheme${add}`)
        
            for (var i = 0; i < number.length; i++) {
                number[i].classList.add(`numberTheme${add}`)
            }
            for (var i = 0; i < operator.length; i++) {
                operator[i].classList.add(`operatorTheme${add}`)
            }
            for (var i = 0; i < blue.length; i++) {
                blue[i].classList.add(`blueTheme${add}`)
            }
        
        
        }
        
        
        }
  
      selector.forEach(input =>{
        input.addEventListener('click', ()=>{
            selectTheme(input.value);
        });
    });
    


  });

   