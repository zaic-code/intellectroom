window.onload = function(){
    let start = document.querySelector('.start input'),
        field_none = document.querySelector('.start'),
        num1 = document.querySelector('.num1'),
        num2 = document.querySelector('.num2'),
        summInput = document.querySelector('.game_in'),
        timer_value = document.querySelector('.timer_value'),
        User_result_ritch = document.querySelector('.User_result_ritch'),
        User_result_error = document.querySelector('.User_result_error'),
        set_numbers = document.querySelectorAll('p input[name=number]'),
        set_time = document.querySelectorAll('p input[name=time]'),
        x = 1,
        time = 30;

summInput.onkeypress = function(e) {

    e = e || event;

    if (e.ctrlKey || e.altKey || e.metaKey) return;

    var chr = getChar(e);

    // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
    // на всякий случай лучше вынести проверку chr == null отдельно
    if (chr == null) return;

    if (chr < '0' || chr > '9') {
        return false;
    }

    }

    function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
    }

    return null; // специальная клавиша
    }
    
    // Предварительные параметры для кнопок и таймера        
        timer_value.innerHTML = 0;
        User_result_ritch.innerHTML = 0;
        User_result_error.innerHTML = 0;
    
    for(let i=0; i<set_numbers.length;i++){
        set_numbers[i].addEventListener('click',function(){
            if(+set_numbers[i].value === 1){            
                return x = 1;
            } else{                      
                return x = 2;  
            }
            
        })
    }
    
    for(let i=0; i<set_time.length;i++){
        set_time[i].addEventListener('click',function(){
            if(+set_time[i].value === 30){            
                return time = 30;
            } else if(+set_time[i].value === 60){                        
                return time = 60;
            }else if(+set_time[i].value === 120){
                return time = 120;
            }        
        });
    }
        
        
     
    
    function random(){
            if(x==1){
                let y = Math.floor((Math.random() * 9) +1);
                return y; 
            } else if(x==2) {
                let y = Math.floor((Math.random() * 99) +1);
                return y;
            }       
        }  
    
    
    // Событие запуска игры
    start.addEventListener('click',  function(){       
        field_none.classList.remove('animated', 'jackInTheBox'); 
        field_none.classList.add('animated', 'flipOutY');                                                                             
        game(); 
    });
   
              
    // игра
    function game(){          
        let ritch = 0;
        let error = 0;
        let a = time;
        let minus = randAndSumm();
    
            
            summInput.focus();
            User_result_ritch.innerHTML = 0;
            User_result_error.innerHTML = 0; 
    
    
            // оратный отсчет
            var timerId = setInterval(function(){
                timer_value.innerHTML = a;
                a--;
                if(a<0){                                   
                User_result_ritch.innerHTML = ritch;
                User_result_error.innerHTML = error;
                num1.innerHTML = '';
                num2.innerHTML = ''; 
                ritch = 0;
                error = 0;
                field_none.classList.remove('animated', 'flipOutY');
                field_none.classList.add('animated', 'jackInTheBox');                
                clearInterval(timerId);
                }                        
            }, 1000); 
    
            summInput.onchange = function(){                        
                let result = summInput.value;
                if (result == minus){  
                ritch++;
                minus = randAndSumm();                            
                } else { 
                error++;
                minus = randAndSumm();             
                }
            } 
        }
    function randAndSumm(){         
            summInput.focus();
            summInput.value = "";
            let a  = random();
            let b = random();
            while(a < b || a == b){                
                a  = random();
                b = random();
            }
            num1.innerHTML = a;
            num2.innerHTML = b; 
            return +num1.innerHTML - (+num2.innerHTML);
                         
        }     
    }
    
    