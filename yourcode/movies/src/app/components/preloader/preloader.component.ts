import { Component } from '@angular/core';
import { PreloaderService } from 'src/app/services/preloader/preloader-service';

@Component({
  selector: 'app-preloader',
  styleUrls: [
    './preloader.component.scss'
  ],
  templateUrl: './preloader.component.html'
})
export class PreloaderComponent {
  constructor(public preloaderService: PreloaderService) {
  }
}
