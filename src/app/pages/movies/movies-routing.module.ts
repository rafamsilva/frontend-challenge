import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesContentComponent } from "./movies-content/movies-content.component";

const routes: Routes = [
  {
    path: "",
    component: MoviesContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
