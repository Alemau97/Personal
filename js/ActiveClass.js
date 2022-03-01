//sticky menu
var menu = document.getElementById('main_menu');
var altura = menu.offsetTop;
window.addEventListener('scroll', function(){
    if (window.pageYOffset > altura){
        menu.classList.add('fixed');
    }
    else{
        menu.classList.remove('fixed');
    }
})