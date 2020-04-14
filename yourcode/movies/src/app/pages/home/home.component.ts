import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string;
  page: number;
  param: any;
  movies: any[];
  totalItems: number;
  message: string;

  constructor(
    private service: MoviesService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  valueSearch(value: string) {
    this.title = value;
    this.page = 1;

    if (this.title !== '') {
      this.getMovies('all');
    } else {
      this.message = '';
    }
  }

  getMovies(type: string) {
    this.service.search(this.params()).subscribe((res) => {
      if (res.Response === 'True') {
        for (const movie of res.Search) {
          const status = this.storageService.get(movie?.imdbID);
          movie.favourite = status;
        }
        if (type === 'scroll') {
          this.movies = [].concat(this.movies, res.Search);
        } else {
          this.movies = res.Search;
          this.totalItems = res.totalResults;
        }
      } else {
        this.message = res.Error;
        this.movies = [];
      }
    });
  }

  params() {
    return (this.param = {
      s: this.title,
      page: this.page,
    });
  }

  onScroll() {
    this.page++;
    if (this.verifyPage(this.page)) {
      this.getMovies('scroll');
    }
  }

  verifyPage(page: number) {
    return page <= Math.round(this.totalItems / 10);
  }
}
