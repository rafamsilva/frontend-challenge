import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesContentComponent } from "./movies-content/movies-content.component";

import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MoviesContentComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule, HttpClientModule]
})
export class MoviesModule {}
