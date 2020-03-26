import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesContentComponent } from "./movies-content/movies-content.component";

import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { MoviesListComponent } from "./movies-content/movies-list/movies-list.component";
import { MoviesDetailComponent } from "./movies-detail/movies-detail.component";
import { CoreModule } from "src/app/core/core.module";

@NgModule({
  declarations: [
    MoviesContentComponent,
    MoviesListComponent,
    MoviesDetailComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    HttpClientModule,
    CoreModule
  ]
})
export class MoviesModule {}
