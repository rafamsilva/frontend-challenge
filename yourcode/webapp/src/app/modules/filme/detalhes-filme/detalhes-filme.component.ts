import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/core/services/filme.service';
import { Filme } from 'src/app/shared/models/filme';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.scss']
})
export class DetalhesFilmeComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  imdbID: string;
  filme: Filme;
  favorito: boolean;
  textoRemover: boolean;

  imdb: string;
  tomatoes: string;

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService
  ) {
    this.imdbID = this.route.snapshot.params.imdbID;
    this.favorito = false;
    this.textoRemover = false;
    this.imdb = '';
    this.tomatoes = '';
  }

  ngOnInit() {
    this.blockUI.start();
    this.filmeService.buscarFilmePorImdbID(this.imdbID).subscribe(retorno => {
      this.filme = retorno;

      this.filme.Ratings.forEach(rate => {
        if (rate['Source'] === 'Internet Movie Database') {
          this.imdb = rate['Value'];
        }

        if (rate['Source'] === 'Rotten Tomatoes') {
          this.tomatoes = rate['Value'];
        }

      });

      const teste = localStorage.getItem(this.filme.imdbID);
      teste ? this.favorito = true : this.favorito = false;
      this.blockUI.stop();
    });
  }

  adicionarRemoverFavorito(): void {
    if (!this.favorito) {
      localStorage.setItem(this.filme.imdbID, 'true');
    } else {
      localStorage.removeItem(this.filme.imdbID);
    }

    this.favorito = !this.favorito;
  }

}
