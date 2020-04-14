import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private movies = [];
  constructor(
  ) { }

  push(element: any) {
    this.remove(element.key);
    this.movies.push(element);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  remove(imdbID: string) {
    const item = this.movies.findIndex(movie => movie.key === imdbID);
    if (item !== -1) {
      this.movies.splice(item, 1);
      localStorage.setItem('movies', JSON.stringify(this.movies));
    }
  }

  get(imdbID: string) {
    if (localStorage.getItem('movies') == null) {
      localStorage.setItem('movies', JSON.stringify(this.movies));
    }
    this.movies = JSON.parse(localStorage.getItem('movies'));
    return this.movies.filter(movie => movie.key === imdbID).map(movie => movie.value).toString();
  }

}
