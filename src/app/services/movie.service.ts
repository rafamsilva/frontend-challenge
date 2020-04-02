import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  public async getMovies(name: string, page: string = '1'): Promise<any> {
    let response: SearchApiResponse = await this.http.get(`${moviesUrl}&s=${name}&type=movie&page=${page}`).toPromise();
    if (response.Error) 
      throw new Error(response.Error); //Errors will be handled by the caller component
    return response.Search;
  }

  public async getMovieById(imdbID: string): Promise<Partial<IdApiResponse>> {
    let response: Partial<IdApiResponse>  = await this.http.get(`${moviesUrl}&i=${imdbID}&plot=full`).toPromise();
    if (response.Error)
      throw new Error(response.Error);
    return response;
  }

  public saveFavourite(imdbID: string) {
    //Persisting non-sensitive data on localStorage. Would make a post request to API if possible
    let favourites = localStorage.getItem('favourites');
    if (favourites) {
      let parsed: [any] = JSON.parse(favourites);
      parsed.push({imdbID: imdbID});
      localStorage.setItem('favourites', JSON.stringify(parsed));
    }
    else 
      localStorage.setItem('favourites', JSON.stringify([{imdbID: imdbID}]))
  }

  public deleteFavourite(imdbID: string) {
    //Would make a delete request to API if possible
    let favourites = localStorage.getItem('favourites');
    let parsed: [any] = JSON.parse(favourites);
    let indexToDelete = parsed.findIndex( item => item.imdbID == imdbID);
    parsed.splice(indexToDelete, 1);
    localStorage.setItem('favourites', JSON.stringify(parsed));
  }

  public isFavourite(imdbID: string): boolean {
    let favourites = localStorage.getItem('favourites');
    if (favourites) {
      let parsed: [any] = JSON.parse(favourites);
      return parsed.some( item => item.imdbID == imdbID);
    }
    return false;
  }
}

//default omdbAPI URL
export const moviesUrl = 'http://www.omdbapi.com/?apikey=c9578edb';

//Simple interfaces for better handling of the API Response
export interface SearchApiResponse {
  Search?: [any];
  Error?: string;
}

export interface IdApiResponse extends Movie {
  Response;
  Error;
}

