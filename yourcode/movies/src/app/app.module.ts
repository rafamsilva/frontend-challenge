import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { HomeModule } from './pages/home/home.module';
import { Interceptor } from './utils/http/interceptor';

import { PreloaderComponent } from './components/preloader/preloader.component';
import { PreloaderService } from './services/preloader/preloader-service';
import { DetailModule } from './pages/detail/detail.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    DetailModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    PreloaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
