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

    // seleccionando operadores
    if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        let tipo;
        switch (tecla) {
            case '+': tipo = 'sumar'; break;
            case '-': tipo = 'restar'; break;
            case '*': tipo = 'multiplicar'; break;
            case '/': tipo = 'dividir'; break;
        }
        display.computar(tipo);
    }

    //configurando igual

    if(tecla==='Enter' || tecla==='='){
        display.computar('igual');
    }
});
