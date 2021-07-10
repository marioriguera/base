import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  /*@Input()*/ nuevo: Personaje = {
    nombre: 'Soy Yo Carajo',
    poder:100000000
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } else {
      //this.personajes_input_agregar.push(this.nuevo);
      //this.onNuevoPersonaje.emit(this.nuevo);
      this.dbzService.agregarPersonaje(this.nuevo);
    }
    console.log(this.nuevo);
    this.limpiarPersonaje();
  }

  limpiarPersonaje() {
    this.nuevo = {
      nombre : '',
      poder : 0
    }
  }
}
