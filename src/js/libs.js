let that = new myMath({
    RandElemOne:'.num1',
    RandelemTwo:'.num2',
    ResultElem:'input'
    });
    

function myMath(obj){
    
    this.elemOne = document.querySelector(obj.RandElemOne),
    this.eleTtwo = document.querySelector(obj.RandelemTwo),
    this.result = document.querySelector(obj.ResultElem),
   
    
    this.random = function(x){
        return Math.floor((Math.random() * x) +1); 
        },

    this.gameSumm = function(number1, number2){
        this.result.onfocus;
        this.result.value = "";

        this.elemOne.innerHTML = random(number1);
        this.eleTtwo.innerHTML = random(number2);

        let summ  = +this.elemOne.innerHTML + (+this.eleTtwo.innerHTML);         
        }
}