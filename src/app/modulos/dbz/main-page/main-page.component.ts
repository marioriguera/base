import { Component, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  };

  constructor( /*private dbzService: DbzService*/ ) { }  

  ngOnInit(): void {
    //this.personajes = this.dbzService.personajes;
  }

  /*agregarNuevoPersonaje( personaje: Personaje){
    console.log("Main Page Component imprime: ",personaje);
  }*/

}
