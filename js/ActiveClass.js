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

//Scroll on elements
let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++){
        let  alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 680 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("animado_scroll");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);