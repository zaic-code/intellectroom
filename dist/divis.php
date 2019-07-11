<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IntellectRoom</title>    
    <link rel="stylesheet" href="./css/reset.css">    
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
                <div class="game_play"><p>Для начала игры нажмите "Пробел" </p></div>
                <div class="game_top">
                    <p class="num1"></p>
                    <p class="znak">/</p>
                    <p class="num2"></p>
                </div> 
                <p>Введите число ниже и нажмите "Enter"</p>             
                <input type="text">                
            </div>
            <div class="descr">
                    <h1>Найди сумму</h1>
                    <div class="descr_result">
                            <div class="time"><p class="timer_value"></p></div>
                            <div class="result_ritch"><p class="User_result_ritch "></p> </div> 
                            <div class="result_error"><p class="User_result_error"></p> </div>                  
                    </div>
                    <div class="settings_number">                                            
                        <p><input name="number" type="radio" value="1" class="dis" checked >-случайные числа 0-9</p>
                        <p><input name="number" type="radio" value="2" class="dis" >-деление на 2</p>                         
                        <p><input name="number" type="radio" value="3" class="dis" >-деление на  3</p>                         
                        <p><input name="number" type="radio" value="4" class="dis" >-деление на  4</p>                         
                        <p><input name="number" type="radio" value="5" class="dis" >-деление на  5</p>                         
                        <p><input name="number" type="radio" value="6" class="dis" >-деление на  6</p>                         
                        <p><input name="number" type="radio" value="7" class="dis" >-деление на  7</p>                         
                        <p><input name="number" type="radio" value="8" class="dis" >-деление на  8</p>                         
                        <p><input name="number" type="radio" value="9" class="dis" >-деление на  9</p>                      
                    </div>
                    <div class="settings_time">                                            
                            <p><input name="time" type="radio" value="30" class="dis" checked>-30s</p>
                            <p><input name="time" type="radio" value="60" class="dis">-60s</p> 
                            <p><input name="time" type="radio" value="120"class="dis">-120s</p>                        
                    </div>                      
            </div>
        </div>        
    </main>
    <?php
    include "./footer.php";
     ?>
    <link rel="stylesheet" href="./css/divis.css">    
    <script src="./js/divis.js"></script>
</body>
</html>