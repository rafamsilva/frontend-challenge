import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import {MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { MovieService } from 'src/app/services/movie.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[];
  searchTerm: string;
  currentPage: number = 1;
  isLoadingScroll = false;
  isLoading = false;
  pageError: any = false;
  errorTooMany: any = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void { }

  createMovieList(movies: [Movie]) {
    this.movieList = movies;
    //If the view window is not scrollable, load more movies
    document.body.scrollHeight <= document.body.clientHeight? this.onScroll() : this.isLoading = false;
  }

  saveSearchTerm(text) {
    //Resetting view state 
    this.searchTerm = text; 
    this.pageError = false;
    this.errorTooMany = false;
    this.isLoading = true;
    this.currentPage = 1;
    if(this.searchTerm.length <= 0) {
      this.movieList = []; 
      this.errorTooMany = false;
    }
  }

  onScroll() {
    //onScroll event activates to search for more movies
    this.isLoadingScroll = true;
    this.currentPage = this.currentPage+1;
    this.movieService.getMovies(this.searchTerm, (this.currentPage).toString())
      .then( result => {
        let moviesToAdd: Movie[] = result;
        this.isLoadingScroll = false;
        this.movieList = this.movieList.concat(moviesToAdd);
      })
      .catch(() =>{
        this.isLoadingScroll = false; 
        this.isLoading = false;
      });
  }

  handleError(error: Error) {
    //The API can throw 2 error types, this handles both. More error types would eventually require proper enum mapping
    error.message == 'Too many results.'? this.errorTooMany = true : this.pageError = this.searchTerm.length > 0;
    this.isLoading = false;
  }

}
