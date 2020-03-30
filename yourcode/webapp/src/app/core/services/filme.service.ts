import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from 'src/app/shared/models/filme';
import { retry, catchError, map } from 'rxjs/operators';

export class FilmeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  buscarFilmes(titulo: string): Observable<Filme[]> {
    return this.http.get(this.urlService + `&s=${titulo}&type=movie`)
      .pipe(
        retry(1),
        map(this.dataFilmes),
        catchError(this.handleError)
      );
  }

  buscarFilmePorImdbID(id: string): Observable<Filme> {
    return this.http.get<Filme>(this.urlService + `&i=${id}`);
  }

  dataFilmes(data: { Search: Filme[]; }): Filme[] {

    const filmes = new Array<Filme>();

    if (data && data.Search) {
      data.Search.forEach((filme: Filme) => {
        filmes.push(filme);
      });
    }

    return filmes;
  }

}
