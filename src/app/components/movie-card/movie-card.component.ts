import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input('movie') movie: Movie = new Movie();
  isFavorited: boolean = false;
  isLoading: boolean = true;

  constructor(private router: Router, private movieService: MovieService) { }

  resolvePoster(movie: Movie, event?) {
    if(event) 
      return event.target.src = defaultImgPath;
    return movie.Poster != "N/A"? movie.Poster : defaultImgPath;
  }

  cardWidth() {
    return this.isSearching()? '100%' : '70%';
  }

  isSearching() {
    return this.router.url == '/';
  }

  checkIfFavorite() {
    return this.isFavorited = this.movieService.isFavourite(this.movie.imdbID);
  }

  endLoading() {
    this.isLoading = false;
  }

  handleFavourite(imdbID, event: Event) {
    event.stopPropagation();
    this.isFavorited = !this.isFavorited;
    this.isFavorited == true? 
      this.movieService.saveFavourite(imdbID) : this.movieService.deleteFavourite(imdbID);
  }

}

export const defaultImgPath= '../../../assets/2.Illustrations/Noimage.png';
