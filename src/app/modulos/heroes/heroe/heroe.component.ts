import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = 'Ironman';
  edad: number = 40;

  
  public get nombreCapitalizado() : string {
    return this.nombre.toUpperCase();
  }
  
  
  obtenerNombre():string{
    return `${ this.nombre} - ${this. edad}`;
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }
}
