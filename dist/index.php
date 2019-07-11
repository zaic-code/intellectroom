<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
    <meta name="yandex-verification" content="c0f27800d8b261ce" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IntellectRoom</title>    
    <link rel="stylesheet" href="./css/reset.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i&display=swap&subset=cyrillic,cyrillic-ext" rel="stylesheet">   
    <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">    
    <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700|Poiret+One&display=swap&subset=cyrillic" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&display=swap" rel="stylesheet">   
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/css/all.min.css">
</head>
<body>
    <?php
        include "./header.php";
    ?> 
    <main>
            <h2>Математические тренажеры</h2>
        <section class="math">  
            <a href="./summ.php">              
                <div class="card">
                    <div class="card_logo">
                    <p>2 + 3 = ?</p>
                    </div>
                    <div class="card_text">
                    <p>Сложение</p> 
                    </div>               
                </div>
            </a>            
            </a>  
            <a href="./minus.php">              
                    <div class="card">
                    <div class="card_logo">
                    <p>5 - 3 = ?</p>
                    </div>
                    <div class="card_text">
                    <p>Вычитание</p> 
                    </div>               
                </div>
            </a> 
            <a href="./mult.php">              
                    <div class="card">
                    <div class="card_logo">
                    <p>2 * 2 = ?</p>
                    </div>
                    <div class="card_text">
                    <p>Умножение</p> 
                    </div>               
                </div>
            </a>
            <a href="#">              
                    <div class="card">
                    <div class="card_logo">
                    <p>4 / 2 = ?</p>
                    </div>
                    <div class="card_text">
                    <p>Деление</p> 
                    </div>               
                </div>
            </a>                            
        </section>
        <h2>Математические тренажеры с одинм неизвестным</h2>
        <section class="math">  
            <a href="#">              
                <div class="card">
                    <div class="card_logo">
                    <p>2 + ? = 6</p>
                    </div>
                    <div class="card_text">
                    <p>Сложение</p> 
                    </div>               
                </div>
            </a>            
            </a>  
            <a href="#">              
                    <div class="card">
                    <div class="card_logo">
                    <p>5 - ? = 2</p>
                    </div>
                    <div class="card_text">
                    <p>Вычитание</p> 
                    </div>               
                </div>
            </a> 
            <a href="#">              
                    <div class="card">
                    <div class="card_logo">
                    <p>2 * ? = 6</p>
                    </div>
                    <div class="card_text">
                    <p>Умножение</p> 
                    </div>               
                </div>
            </a>
            <a href="#">              
                    <div class="card">
                    <div class="card_logo">
                    <p>4 / ? = 2</p>
                    </div>
                    <div class="card_text">
                    <p>Деление</p> 
                    </div>               
                </div>
            </a>                           
        </section>                
        <h2>Память и внимание</h2>
        <section class="mind">  
            <a href="./find_num.php">              
                <div class="card">
                    <div class="card_logo">
                    <i class="fas fa-search"></i>
                    </div>
                    <div class="card_text">
                    <p>Найди число</p> 
                    </div>               
                </div>
            </a>
            <a href="./shulte.php">              
                <div class="card">
                    <div class="card_logo">
                    <i class="fas fa-search"></i>
                    </div>
                    <div class="card_text">
                    <p>Таблицы шульте</p> 
                    </div>               
                </div>
            </a>
            <a href="#">              
                <div class="card">
                    <div class="card_logo">
                    <i class="fas fa-search"></i>
                    </div>
                    <div class="card_text">
                    <p>Матрицы памяти</p> 
                    </div>               
                </div>
            </a>                         
        </section>        
    </main>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(54028738, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
    });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/54028738" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    <?php
    include "./footer.php";
     ?>    
</body>
</html>