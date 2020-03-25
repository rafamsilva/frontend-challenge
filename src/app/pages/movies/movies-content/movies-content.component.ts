import { Component, OnInit } from "@angular/core";
import { Validators, FormControl } from "@angular/forms";

import { Movie } from "../../../shared/models/movie.model";
import { MovieService } from "src/app/shared/services/movies.service";

@Component({
  selector: "app-movies-content",
  templateUrl: "./movies-content.component.html",
  styleUrls: ["./movies-content.component.scss"]
})
export class MoviesContentComponent implements OnInit {
  searchField: FormControl = new FormControl("");
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  search() {
    console.log(this.searchField.value);
    this.movieService
      .getMovieByParam(this.searchField.value)
      .subscribe(movies => {
        this.movies = movies;
      });
  }
}
