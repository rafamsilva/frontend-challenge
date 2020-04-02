import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') movie: Movie;
  isFavorited: boolean = false;

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void { }

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

}

export const defaultImgPath= '../../../assets/2.Illustrations/Noimage.png';