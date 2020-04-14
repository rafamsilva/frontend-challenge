import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { mergeMap } from 'rxjs/operators';
import { DetailMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private sub: any;
  imdbID: string;
  params: any;
  movie: DetailMovie;
  btnConfig: any;

  constructor(
    private route: ActivatedRoute,
    private service: MoviesService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        mergeMap((param) =>
          this.service.findId({ i: param['id'], plot: 'full' })
        )
      )
      .subscribe((res) => {
        const status = this.storageService.get(res?.imdbID);
        if (status === '') {
          res.favourite = false;
        } else {
          res.favourite = status;
        }
        this.btnConfigValues(res.favourite);
        this.movie = res;
      });
  }

  favorite(isFavorite: boolean) {
    this.storageService.push({ key: this.movie.imdbID, value: isFavorite });
    this.movie.favourite = isFavorite;
    this.btnConfigValues(isFavorite);
  }

  btnConfigValues(isFavorite?: boolean) {
    if (isFavorite) {
      this.btnConfig = {
        label: 'Added',
        icon: 'icon-heart-full.svg',
        isFavorite: isFavorite,
      };
    } else {
      this.btnConfig = {
        label: 'Add to favourites',
        icon: 'icon-heart-grey.svg',
        isFavorite: isFavorite,
      };
    }
  }
}
