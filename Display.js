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
      borrar(){
        this.valorActual=this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
      }
      
       borrarTodo(){
        this.valorActual='';
        this.valorAnterior='';
        this.tipOperacion=undefined;
        this.imprimirValores();
     } 

    agregarNumero(numero){
        this.valorActual= this.valorActual.toString()+numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipOperacion] || ''}`;
     }

    calcular(){
        const valorAnterior=parseFloat(this.valorAnterior);
        const valorActual=parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return 
        this.valorActual=this.calculador[this.tipOperacion](valorAnterior, valorActual);
    }

    computar(tipo){
        this.tipOperacion !== 'igual' && this.calcular();
        this.tipOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual='';
        this.imprimirValores();
     }



}
