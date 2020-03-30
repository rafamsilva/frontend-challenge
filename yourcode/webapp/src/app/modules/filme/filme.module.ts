import { NgModule } from '@angular/core';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardFilmeComponent } from './card-filme/card-filme.component';

const routes: Routes = [
  {path : '', component: ListaFilmesComponent },
  {path : 'detalhes-filme/:imdbID', component: DetalhesFilmeComponent }
];

@NgModule({
  declarations: [ListaFilmesComponent, DetalhesFilmeComponent, CardFilmeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmeModule { }
