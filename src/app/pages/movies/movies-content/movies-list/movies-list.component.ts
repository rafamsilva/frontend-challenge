import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../../../shared/models/movie.model";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"]
})
export class MoviesListComponent implements OnInit {
  @Input() movies: Movie[] = [];

  constructor() {}

  ngOnInit() {}
}
