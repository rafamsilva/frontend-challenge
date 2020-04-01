import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie = new Movie();
  isFavourite: boolean = false;
  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( params => {
      this.movieService.getMovieById(params.get('imdbID'))
      .then( (movie: Movie) => { this.createMovie(movie)} , err => this.handleNotFound())
    });
  }

  createMovie(movie: Movie) {
    this.movie = movie;
    this.isFavourite = this.movieService.isFavourite(movie.imdbID);
    this.isLoading = false;
  }

  addFavourite(movie: Movie) {
    this.isFavourite = true;
    this.movieService.saveFavourite(movie.imdbID);
  }

  getRottenRating(movie: Movie) {
    return movie.Ratings.find( rating => rating.Source == "Rotten Tomatoes").Value
  }

  getActorsList(movie: Movie) {
    return movie.Actors.split(", ");
  }

  getGenreList(movie: Movie) {
    return movie.Genre.split(", ");
  }

  getDirectorList(movie: Movie) {
    return movie.Director.split(", ")
  }

  handleNotFound() {
    //TO-DO
  }

}
