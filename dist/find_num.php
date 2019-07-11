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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
</head>
<body>
    <?php
            include "./header.php";
        ?>
    <main>
        <div class="model">                                   
            <div class="game">
            <div class="start"><input type="button" value="НАЧАТЬ ИГРУ"></div>            
                <div class="number">                    
                    <div class="find_flex"><p class="find">Найди число:</p><span class="find_num"></span> </div> 
                </div>
                <div class="numbers">
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div> 
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                </div>                              
            </div>
            <div class="descr">
                    <h1>Найди число</h1> 
                    <div class="descr_result">
                            <div class="time"><p class="timer_value"></p></div>
                            <div class="result_ritch"><p class="User_result_ritch"></p> </div> 
                            <div class="result_error"><p class="User_result_error"></p> </div>                  
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
     <link rel="stylesheet" href="./css/find_num.css">
    <script src="./js/find_num.js"></script>
</body>
</html>