const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnHablar = document.querySelector("#escuchar");

function encriptar() {
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("a","ai")
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    inputResultado.value= mensajeEncriptado;
}

function desencriptar() {
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("a","ai")
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    inputResultado.value= mensajeEncriptado;
}