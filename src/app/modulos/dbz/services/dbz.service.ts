import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    constructor() {
        console.log('Servicio DBZ inicializado');
    }

    public get personajes(): Personaje[] {
        // el [... ] es para desligar la variable original y devolver un arreglo nuevo, ya que todo es pasado por referencia
        // y podria modificar el _personajes con el mismo get
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}