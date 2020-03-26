import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from "./components/loading/loading.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { EmptyStateComponent } from "./components/empty-state/empty-state.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    LoadingComponent,
    NotFoundComponent,
    EmptyStateComponent,
    NavBarComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ReactiveFormsModule,
    LoadingComponent,
    NotFoundComponent,
    EmptyStateComponent,
    NavBarComponent
  ]
})
export class SharedModule {}
