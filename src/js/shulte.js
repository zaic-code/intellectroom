window.onload = function(){
    let cell = document.querySelectorAll('.cell'),   
    numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];            
   
function compareRandom(a, b){
        return Math.random() - 0.5;
      }

function restart (){ 
    numbers.sort(compareRandom);
    for(let i = 0; i < cell.length; i++ ) {
        cell[i].textContent = numbers[i];
    }
   }

   restart();

}
    
       

//     function random(){            
//         let y = Math.floor((Math.random() * 1 ) +10);
//         return y;                 
//         }


    


// function setNumder(){
//     counter++;
//     let x = random();
//     let y = Math.floor((Math.random() * 17 ) +1);
//     find_num.innerHTML = x;

//     for(let i=0; i<cell.length; i++){            
//         if(i == y){
//             cell[i].innerHTML = x;
//         }else{
//             cell[i].innerHTML = random();            
//         }
//     } 
//     if(counter === 5){
//         setAnimate();
//     }else if( counter === 6){        
//         setAnimate();
//     }else if( counter === 7){        
//         setAnimate();
//     }else if( counter === 8){        
//         setAnimate();
//     }else if( counter > 9){        
//         setAnimate();
//     }   
// }

        
// function game(){ 
//     console.log(1);
//     dis = false;         
//     let a = time;        
//     setNumder();
//     var timerId = setInterval(function(){        
//         timer_value.innerHTML = a;
//         a--;
//         if(a<0){            
//             counter = 0;
//             dis = true;
//             User_result_ritch.innerHTML = rigth;
//             User_result_error.innerHTML = error; 
//             for(let i=0; i<cell.length; i++){
//                 cell[i].classList.remove('animated');
//             } 
//             field_none.classList.remove('animated', 'flipOutY');
//             field_none.classList.add('animated', 'jackInTheBox');                          
//             clearInterval(timerId);                      
//         }                        
//     }, 1000);  
// }

// for(let i=0; i<cell.length; i++){
//     cell[i].addEventListener('click',function(event){
//         if(dis){
//             event.preventDefault();
//         }else{                   
//             if( (+cell[i].innerHTML) === (+find_num.innerHTML) ){
//                 rigth++;                    
//                 setNumder();                    
//             }else{
//                 error++;                    
//                 setNumder();
//             }                     
//         }          
//     })
// }

// // генерация анимации



// // Событие запуска игры
// start.addEventListener('click',  function(){
//         field_none.classList.remove('animated', 'jackInTheBox'); 
//         field_none.classList.add('animated', 'flipOutY');        
                                                                                          
//         game(); 
// });


