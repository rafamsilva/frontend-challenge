import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { PreloaderService } from 'src/app/services/preloader/preloader-service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { DetailRoutingModule } from './detail-routing.module';
import { TextBoxComponent } from 'src/app/components/text-box/text-box.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

@NgModule({
  declarations: [
    DetailComponent,
    TextBoxComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  providers: [
    PreloaderService,
    MoviesService,
  ]
})
export class DetailModule { }
