import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentMoviesComponent } from './content-movies/content-movies.component';
import { RenderMoviesComponent } from './content-movies/render-movies/render-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentMoviesComponent,
    RenderMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
