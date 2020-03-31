import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import {MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: [Movie];

  constructor() { }

  ngOnInit(): void {
  }

  createMovieList(movies: [Movie]) {
    this.movieList = movies;
  }

  handleError(error) {

  }

}
