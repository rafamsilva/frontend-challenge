import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  public async getMovies(name: string): Promise<any> {
    let response: ApiResponse = await this.http.get(`${moviesUrl}&s=${name}&type=movie&page=1`).toPromise();
    if (response.Error)
      throw new Error(response.Error);
    return response.Search;
  }
}

export const moviesUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=c9578edb';

export interface ApiResponse {
  Search?: [any];
  Error?: string;
}

