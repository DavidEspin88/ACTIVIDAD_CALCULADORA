const displayValorAnterior = document.getElementById('valor_anterior');
const displayValorActual = document.getElementById('valor_actual');
const botonesNumeros= document.querySelectorAll('.numero');
const botonesOperadores= document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior,displayValorActual);

document.addEventListener('keydown', event => {
    const tecla = event.key;

    // Si presiona números o punto
    if (!isNaN(tecla) || tecla === '.') {
        display.agregarNumero(tecla);
    }


});
