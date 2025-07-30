//let titulo = document.querySelector('h1');
// linea de codigo para seleccionar un elemento o 
// etiqueta html con JavaScript

//titulo.innerHTML = 'Juego del número secreto';
// linea de codigo para cambiar el contenido de un elemento a texto
let numeroSecreto = 0; 
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1 ? 'vez' : 'veces')}`); 
    document.getElementById('reiniciar').removeAttribute('disabled'); 
} else {
    // El usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarcaja(); 

}
    return; 
}

function limpiarcaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //si el numero generado esta incluido en la lista
    // si ya sorteamos todo los numeros
if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todo los números posibles');
} else {

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); 
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego () {
    // limpiar la caja
    limpiarcaja();
    // indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    // inicializar el numero intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 
}
// linea de codigo para crear una funcion 
// que se ejecuta al hacer click en el boton
condicionesIniciales();

// linea de codigo para ejecutar la funcion al cargar la pagina