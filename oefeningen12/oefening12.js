var nav = document.getElementById('nav');
var menu = document.getElementById('menu');
var close = document.getElementById('close');

menu.onclick=function(){
    nav.classList.add('visible');
	nav.style.opacity = 1;

};
close.onclick=function(){
    nav.classList.remove('visible');
	nav.style.opacity = 0;
};