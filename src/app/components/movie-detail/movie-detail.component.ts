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
  pageError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  async ngOnInit() {
    let imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');
    return this.movieService.getMovieById(imdbID)
      .then( (movie: Movie) => this.createMovie(movie) , () => this.handleNotFound());
  }

  async createMovie(movie: Movie) {
    this.movie = movie;
    this.isFavourite = this.movieService.isFavourite(movie.imdbID);
    return this.isLoading = false;
  }

  addFavourite(movie: Movie) {
    this.isFavourite = !this.isFavourite;
    this.isFavourite == true? 
      this.movieService.saveFavourite(movie.imdbID) : this.movieService.deleteFavourite(movie.imdbID)
  }

  getRottenRating(movie: Movie) {
    let rating = movie.Ratings.find( rating => rating && rating.Source == "Rotten Tomatoes");
    return rating? rating.Value : 'N/A';
  }

  getActorsList(movie: Movie) {
    return movie.Actors.split(", ");
  }

  getGenreList(movie: Movie) {
    return movie.Genre.split(", ");
  }

  getDirectorList(movie: Movie) {
    return movie.Director.split(", ");
  }

  handleNotFound() {
    this.pageError = true;
    this.isLoading = false;
  }

}
