import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { ListaArtistasComponent } from './view/lista-artistas/lista-artistas.component';
import { ListaAlbunsComponent } from './view/lista-albuns/lista-albuns.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PagPrincipalComponent,
    ListaArtistasComponent,
    ListaAlbunsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
