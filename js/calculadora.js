function fechar(){

    document.getElementById('pop-up').style.opacity = '0'
    setTimeout(function(){
    document.getElementById('pop-up').style.display = 'none'
    document.getElementById('calculadora').style.display = 'block'
        setTimeout(function(){
            document.getElementById('calculadora').style.opacity = '1'
        ,300})
    },500)
}

function insert(numero){
    var num = document.getElementById('resultado').innerText
    document.getElementById('resultado').innerText = num + numero
}

function clean(){
    document.getElementById('resultado').innerText = ''
}

function calcular(){
    var resultado = document.getElementById('resultado').innerText
    if(resultado){
        document.getElementById('resultado').innerText = eval(resultado)
    }
}

VanillaTilt.init(document.querySelector(".pop-up"), {
    max: 13,
    speed: 200,
});

VanillaTilt.init(document.querySelector(".calculadora"), {
    max: 13,
    speed: 2000,
    scale: 1.1

});