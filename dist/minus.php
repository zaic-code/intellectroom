<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IntellectRoom</title>    
    <link rel="stylesheet" href="./css/reset.css">    
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i&display=swap&subset=cyrillic,cyrillic-ext" rel="stylesheet">   
    <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">    
    <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700|Poiret+One&display=swap&subset=cyrillic" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/main.css">       
</head>
<body>
<?php
            include "./header.php";
        ?>
    <main>
        <div class="model">                       
            <div class="game">
            <div class="start"><input type="button" value="НАЧАТЬ ИГРУ"></div>
                <div class="game_top">
                    <p class="num1"></p>
                    <p class="znak">-</p>
                    <p class="num2"></p>
                </div> 
                <p>Введите число ниже и нажмите "Enter"</p>             
                <input class="game_in" type="text">                
            </div>
            <div class="descr">
                    <h1>Найди разность</h1>
                    <div class="descr_result">
                            <div class="time"><p class="timer_value"></p></div>
                            <div class="result_ritch"><p class="User_result_ritch "></p> </div> 
                            <div class="result_error"><p class="User_result_error"></p> </div>                  
                    </div>
                    <div class="settings_number">                                            
                        <p><input name="number" type="radio" value="1" checked >- однозначные числа</p>
                        <p><input name="number" type="radio" value="2" >- двузначные числа</p>                         
                    </div>
                    <div class="settings_time">                                            
                            <p><input name="time" type="radio" value="30" checked>-30s</p>
                            <p><input name="time" type="radio" value="60">-60s</p> 
                            <p><input name="time" type="radio" value="120">-120s</p>                        
                    </div>                      
            </div>
        </div>        
    </main>
    <?php
    include "./footer.php";
     ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="./css/minus.css">  
    <script src="./js/minus.js"></script>
</body>
</html>