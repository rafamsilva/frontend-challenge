import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesContentComponent } from "./movies-content/movies-content.component";
import { MoviesDetailComponent } from "./movies-detail/movies-detail.component";

const routes: Routes = [
  {
    path: "",
    component: MoviesContentComponent
  },
  {
    path: "detail/:imdbID",
    component: MoviesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
