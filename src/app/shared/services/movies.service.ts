import { Movie } from "src/app/shared/models/movie.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private applicationUrl: string = `${environment.apiUrl}?apikey=${environment.apiToken}`;

  constructor(private http: HttpClient) {}

  getMovieByParam(param: string): Observable<Movie[]> {
    return this.http
      .get(this.applicationUrl + `&s=${param}`)
      .pipe(catchError(this.handleError), map(this.jsonDataToMovies));
  }

  jsonDataToMovies(jsonData: any): Movie[] {
    const movies: Movie[] = [];
    if (jsonData && jsonData.Search) {
      jsonData.Search.forEach(element => movies.push(element as Movie));
    }
    return movies;
  }

  handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
