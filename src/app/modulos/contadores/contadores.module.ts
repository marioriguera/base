import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";
import { ListaContadoresComponent } from "./lista-contadores/lista-contadores.component";

@NgModule({
    declarations:[
        ContadorComponent,
        ListaContadoresComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        CommonModule
    ]
})
export class ContadoresModule {
    
}