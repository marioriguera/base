import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Contador App';
  numero: number = 10;

  base: number = 5;

  acumular1(valor: number) {
    (valor == 2) ? this.numero += this.base : this.numero -= this.base;
  }

  acumular2(valor: number){
    this.numero+=valor;
  }

  sumar() {
    this.numero += 1;
  }

  restar() {
    this.numero -= 1;
  }

}
