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
    });
  }
}
