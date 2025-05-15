class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual=displayValorActual;
        this.displayValorAnterior=displayValorAnterior;
        this.tipOperacion=undefined;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior='';
        this.signos ={
            sumar:'+',
            restar:'-',
            dividir:'/',
            multiplicar:'x',
        }
    }
 
    agregarNumero(numero){
        this.valorActual= this.valorActual.toString()+numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipOperacion] || ''}`;
}

}
