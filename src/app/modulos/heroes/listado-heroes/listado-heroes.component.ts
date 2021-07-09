import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit {

  constructor() { }

  heroeBorrado : string = "";

  ngOnInit(): void {
  }

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan America'];

  borrarHeroe(pos:number):void{
    if (this.heroes.length>0) {
      this.heroeBorrado = this.heroes.splice(pos,1)[0];
    }else{
     this.heroeBorrado = ""; 
    }
  }

}
