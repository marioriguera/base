import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './modulos/contador/contador.component';
import { HeroeComponent } from './modulos/heroes/heroe/heroe.component';
import { ListadoHeroesComponent } from './modulos/heroes/listado-heroes/listado-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListadoHeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
