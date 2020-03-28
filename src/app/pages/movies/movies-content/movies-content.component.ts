import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";

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
  loading: boolean = false;
  alreadyRequest: boolean = false;
  form: FormGroup;

  constructor(private movieService: MovieService, private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();

    this.form.controls["searchField"].valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((value: string) => {
          this.loading = true;
          this.alreadyRequest = true;
          return this.movieService.getMovieByParam(value);
        })
      )
      .subscribe(movies => {
        this.movies = movies;
        this.loading = false;
      });
  }

  search() {
    this.loading = true;
    this.alreadyRequest = true;
    this.movieService
      .getMovieByParam(this.form.get("searchField").value)
      .subscribe(movies => {
        this.movies = movies;
        this.loading = false;
      });
  }

  buildForm(): void {
    this.form = this.fb.group({
      searchField: ["", Validators.required]
    });
  }
}
