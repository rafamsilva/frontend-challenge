import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/core/services/filme.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Filme } from 'src/app/shared/models/filme';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})
export class ListaFilmesComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  filmes: Filme[];
  buscarForm: FormGroup;
  titulo: FormControl;
  loading: boolean;

  constructor(
    private filmeService: FilmeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.blockUI.start();
    this.titulo = this.formBuilder.control('');

    this.buscarForm = this.formBuilder.group({
      titulo: this.titulo
    });

    this.titulo.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((titulo: string) => {
          this.loading = true;
          return this.filmeService.buscarFilmes(titulo);
        })
      ).subscribe(filmes => {
        filmes.forEach(filme => {

          const favorito = localStorage.getItem(filme.imdbID);

          favorito ? filme.favorito = true : filme.favorito = false;

        });

        this.filmes = filmes;
        this.loading = false;
      });
    this.blockUI.stop();
  }

}
