

let numeroMaximo = 15;
let listaNumerosSorteados =[];
//Llamado de la funcion para generar el nuemero aleatorio pasando como parametro el intervalo
let numeroSecreto = 0;
let intentos=0;

//Funcion que toma un elemento y le asigna un valor o texto
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion que compara el numero ingresado con el aleatorio
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto el numero
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor');
        }else{
            asignarTextoElemento('p','El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
        document.querySelector('#valorUsuario').focus();
    }
    return;
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero aleatorio');
    asignarTextoElemento('p',`Ingresa un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentos = 1;  
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

//Llamando las funciones para iniciar el juego
condicionesIniciales();

//funcion que retorna el numero aleatorio
function generarNumeroSecreto(numeroMaximo) {
    return Math.floor(Math.random()*numeroMaximo)+1;

    //Salir del juego cuando se haya sorteado todos los numeros
  /*  if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Se han sorteado todos los numeros');
    }

    //SI ESTA EN LA LISTA DE GENERADOS ANTERIORMENTE, GENERA UNO NUEVO
    if (listaNumerosSorteados.includes(numeroGenerado)) {

        //la funcion se llama a si misma, por eso debe agregarse return 
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }*/
}

//Funcion que limpia la variable
function limpiarCaja(){
     document.querySelector('#valorUsuario').value = '';   
}

//funcion que reinicia el juego
function reiniciarJuego() {
    //LIMPIAR CAJA
    limpiarCaja();
    //IMPLEMENTAMOS CONDICIONES INICIALES
    condicionesIniciales();
}



