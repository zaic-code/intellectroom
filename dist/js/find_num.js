"use strict";window.onload=function(){var e=document.querySelector(".start input"),a=document.querySelector(".start"),r=document.querySelector(".find_num"),i=document.querySelectorAll(".cell"),n=document.querySelectorAll("p input[name=time]"),o=document.querySelector(".timer_value"),l=document.querySelector(".User_result_ritch"),d=document.querySelector(".User_result_error"),c=0,s=0,u=0,m=!1,f=30;function L(){return Math.floor(240*Math.random()+10)}o.innerHTML=0,l.innerHTML=0;for(var t=function(e){n[e].addEventListener("click",function(){return 30==+n[e].value?f=30:60==+n[e].value?f=60:120==+n[e].value?f=120:void 0})},M=d.innerHTML=0;M<n.length;M++)t(M);function h(){u++;var e=L(),n=Math.floor(17*Math.random()+1);r.innerHTML=e;for(var t=0;t<i.length;t++)i[t].innerHTML=t==n?e:L();5===u?T():6===u?T():7===u?T():8===u?T():9<u&&T()}var v=function(n){i[n].addEventListener("click",function(e){m?e.preventDefault():(+i[n].innerHTML==+r.innerHTML?c++:s++,h())})};for(M=0;M<i.length;M++)v(M);function T(){for(var e=Math.floor(17*Math.random()+1),n=Math.floor(17*Math.random()+1),t=Math.floor(17*Math.random()+1),a=Math.floor(17*Math.random()+1),r=Math.floor(17*Math.random()+1),o=0;o<i.length;o++)i[o].classList.add("animated","pulse"),o==e?i[o].classList.add("animated","shake"):o==n?i[o].classList.add("animated","swing"):o==t?i[o].classList.add("animated","tada"):o==a?i[o].classList.add("animated","wobble"):o==r&&i[o].classList.add("animated","jello")}e.addEventListener("click",function(){a.classList.remove("animated","jackInTheBox"),a.classList.add("animated","flipOutY"),s=c=0,l.innerHTML=0,d.innerHTML=0,function(){console.log(1),m=!1;var n=f;h();var t=setInterval(function(){if(o.innerHTML=n,--n<0){m=!(u=0),l.innerHTML=c,d.innerHTML=s;for(var e=0;e<i.length;e++)i[e].classList.remove("animated");a.classList.remove("animated","flipOutY"),a.classList.add("animated","jackInTheBox"),clearInterval(t)}},1e3)}()})};