import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchComponent } from 'src/app/components/search/search.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { NotfoundComponent } from 'src/app/components/notfound/notfound.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    HomeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
