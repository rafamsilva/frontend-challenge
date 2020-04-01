import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  public async getMovies(name: string): Promise<any> {
    let response: SearchApiResponse = await this.http.get(`${moviesUrl}&s=${name}&type=movie&page=1`).toPromise();
    if (response.Error)
      throw new Error(response.Error);
    return response.Search;
  }

  public async getMovieById(imdbID: string): Promise<Partial<IdApiResponse>> {
    let response: Partial<IdApiResponse>  = await this.http.get(`${moviesUrl}&i=${imdbID}&plot=full`).toPromise();
    debugger;
    if (response.Error)
      throw new Error(response.Error);
    return response;
  }

  public saveFavourite(imdbID: string) {
    let favourites = localStorage.getItem('favourites');
    if (favourites) {
      debugger;
      let parsed: [any] = JSON.parse(favourites);
      parsed.push({imdbID: imdbID});
      localStorage.setItem('favourites', JSON.stringify(parsed));
    }
    else 
      localStorage.setItem('favourites', JSON.stringify([{imdbID: imdbID}]))
  }

  public isFavourite(imdbID: string): boolean {
    let favourites = localStorage.getItem('favourites');
    if (favourites){
      let parsed: [any] = JSON.parse(favourites);
      debugger;
      return parsed.some( item => item.imdbID == imdbID);
    }
    else
      return false;
  }
}

export const moviesUrl = 'http://www.omdbapi.com/?apikey=c9578edb';

export interface SearchApiResponse {
  Search?: [any];
  Error?: string;
}

export interface IdApiResponse extends Movie {
  Response;
  Error;
}

