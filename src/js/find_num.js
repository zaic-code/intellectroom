window.onload = function(){
    let start = document.querySelector('.start input'),
        field_none = document.querySelector('.start'),
        find_num = document.querySelector('.find_num'),
        cell = document.querySelectorAll('.cell'),
        set_time = document.querySelectorAll('p input[name=time]'),
        timer_value = document.querySelector('.timer_value'),
        User_result_ritch = document.querySelector('.User_result_ritch'),
        User_result_error = document.querySelector('.User_result_error'),
        rigth = 0,
        error = 0,
        counter = 0,
        dis = false,
        time = 30;

        timer_value.innerHTML = 0;
        User_result_ritch.innerHTML = 0;
        User_result_error.innerHTML = 0;

    function random(){            
        let y = Math.floor((Math.random() * (250-10) ) +10);
        return y;                 
        }


    for(let i=0; i<set_time.length;i++){
    set_time[i].addEventListener('click',function(){
        if(+set_time[i].value === 30){                      
            return time=30;
        } else if(+set_time[i].value === 60){                                  
            return time=60;
        }else if(+set_time[i].value === 120){           
            return time=120;
        }        
    });
}


function setNumder(){
    counter++;
    let x = random();
    let y = Math.floor((Math.random() * 17 ) +1);
    find_num.innerHTML = x;

    for(let i=0; i<cell.length; i++){            
        if(i == y){
            cell[i].innerHTML = x;
        }else{
            cell[i].innerHTML = random();            
        }
    } 
    if(counter === 5){
        setAnimate();
    }else if( counter === 6){        
        setAnimate();
    }else if( counter === 7){        
        setAnimate();
    }else if( counter === 8){        
        setAnimate();
    }else if( counter > 9){        
        setAnimate();
    }   
}

        
function game(){ 
    console.log(1);
    dis = false;         
    let a = time;        
    setNumder();
    var timerId = setInterval(function(){        
        timer_value.innerHTML = a;
        a--;
        if(a<0){            
            counter = 0;
            dis = true;
            User_result_ritch.innerHTML = rigth;
            User_result_error.innerHTML = error; 
            for(let i=0; i<cell.length; i++){
                cell[i].classList.remove('animated');
            } 
            field_none.classList.remove('animated', 'flipOutY');
            field_none.classList.add('animated', 'jackInTheBox');                          
            clearInterval(timerId);                      
        }                        
    }, 1000);  
}

for(let i=0; i<cell.length; i++){
    cell[i].addEventListener('click',function(event){
        if(dis){
            event.preventDefault();
        }else{                   
            if( (+cell[i].innerHTML) === (+find_num.innerHTML) ){
                rigth++;                    
                setNumder();                    
            }else{
                error++;                    
                setNumder();
            }                     
        }          
    })
}

// генерация анимации
function setAnimate(){  
        let z = Math.floor((Math.random() * 17 ) +1);
        let d = Math.floor((Math.random() * 17 ) +1);
        let f = Math.floor((Math.random() * 17 ) +1);
        let c = Math.floor((Math.random() * 17 ) +1);
        let v = Math.floor((Math.random() * 17 ) +1);           
                    for(let i=0; i<cell.length; i++){
                        cell[i].classList.add('animated', 'pulse')
                        if(i==z){
                            cell[i].classList.add('animated', 'shake')
                        }else if(i==d){
                            cell[i].classList.add('animated', 'swing')
                        }else if(i==f){
                            cell[i].classList.add('animated', 'tada')
                        }else if(i==c){
                            cell[i].classList.add('animated', 'wobble')
                        }else if(i==v){
                            cell[i].classList.add('animated', 'jello')
                        }
                        }
        }


// Событие запуска игры
   start.addEventListener('click',  function(){
        field_none.classList.remove('animated', 'jackInTheBox'); 
        field_none.classList.add('animated', 'flipOutY');
        // field_none.style.display = none;
           rigth = 0;
           error = 0;
           User_result_ritch.innerHTML = 0;
           User_result_error.innerHTML = 0;                                                                                    
        game(); 
});


}