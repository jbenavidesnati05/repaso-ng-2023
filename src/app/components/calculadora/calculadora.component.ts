import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  n1 = 0
  n2 = 0
  resultado = 0;
  sumar(){
    this.resultado = this.n1+this.n2
  }
  restar(){
    this.resultado = this.n1-this.n2
  }
  multi(){
    this.resultado = this.n1*this.n2
  }
  div(){
    if(this.n2==0){
      alert(" no se puede dividir por cero")
    }else{
      this.resultado = this.n1/this.n2
    }
  }
  limpiar(){
    this.n1 = 0;
    this.n2 = 0;
  }
}
