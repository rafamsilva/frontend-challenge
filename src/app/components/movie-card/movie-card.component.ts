import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') movie: Movie;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resolvePoster(movie: Movie) {
    return movie.Poster != "N/A"? movie.Poster : defaultImgPath;
  }

  cardWidth() {
    console.log(this.router.url);
    return this.isSearching()? '100%' : '70%';
  }

  isSearching() {
    return this.router.url == '/';
  }

}

export const defaultImgPath= '../../../assets/2.Illustrations/Noimage.png';