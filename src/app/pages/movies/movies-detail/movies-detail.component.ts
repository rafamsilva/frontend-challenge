import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Movie } from "../../../shared/models/movie.model";
import { MovieService } from "../../../shared/services/movies.service";

@Component({
  selector: "app-movies-detail",
  templateUrl: "./movies-detail.component.html",
  styleUrls: ["./movies-detail.component.scss"]
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie;
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.loadMovie();
  }

  loadMovie() {
    let imdbID = this.route.snapshot.url[1].path;
    this.movieService.getMovie(imdbID).subscribe(movie => {
      this.movie = movie;
      this.validFavorite(movie);
    });
  }

  saveFavorite(movie): void {
    localStorage.setItem(movie.imdbID, "true");
    this.isFavorite = true;
  }

  removeFavorite(movie): void {
    localStorage.removeItem(movie.imdbID);
    this.isFavorite = false;
  }

  validFavorite(movie) {
    let favorite = JSON.parse(localStorage.getItem(movie.imdbID));
    this.isFavorite = favorite ? favorite : false;
  }
}
