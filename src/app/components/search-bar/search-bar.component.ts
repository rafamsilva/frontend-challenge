import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  searchText: string;
  @Output() result = new EventEmitter<any>();
  @Output() searchErrorMessage = new EventEmitter<Error>();

  ngOnInit(): void {
  }

  onChange(title: string) {
    this.movieService.getMovies(title)
      .then( result => this.result.emit(result),(err) => this.searchErrorMessage.emit(err));
  }

}
