import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListaMusicalService } from '../service/lista-musical.service';

const PAUSA = 300;

@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.css']
})
export class PagPrincipalComponent implements OnInit {


  mensagemErro = ''

  inputTexto!: string;
  selectTipo!: string;
  listaArtistas!: boolean;
  listaAlbuns!: boolean;

  public defaultItem: { text: string } = {
    text: "Escolha o tipo",
  };

  selectOpcoes = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  itens: any[] = [];

  constructor( private listaMusicaService: ListaMusicalService) { }

  ngOnInit(): void { }

  pesquisar() {

    if (this.selectTipo == 'album') {
      this.listaAlbuns = true;
      this.listaMusicaService.pesquisarPorAlbum(this.inputTexto?.toString()).subscribe(
        (response) => {
          this.itens = response.results.albummatches.album;

        },
        (error) => {
          console.log(error);
        }
      );

    } else if (this.selectTipo == 'artista') {
      this.listaAlbuns = false;
      this.listaMusicaService.pesquisarPorArtista(this.inputTexto).subscribe(
        (response) => {
          this.itens = response.results.artistmatches.artist;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
