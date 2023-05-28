import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.css']
})
export class ListaArtistasComponent implements OnInit {

  // selectTipo!: string;
  listaArtistas!: boolean;

  @Input() inputTexto!: string;
  @Input() selectTipo!: string;
  @Input() selectOpcoes!: string;

  // selectOpcoes = new FormControl(null, Validators.required);
  // selectFormControl = new FormControl('', Validators.required);


  constructor() { }

  ngOnInit(): void {
  }


  // if (this.selectTipo == 'artista') {
  //   this.listaAlbum = false;
  //   this.listaMusicaService.pesquisarPorArtista(this.inputTexto).subscribe(
  //     (response) => {
  //       this.itens = response.results.artistmatches.artist;
  //       this.dadosCarregados = true;

  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

}
