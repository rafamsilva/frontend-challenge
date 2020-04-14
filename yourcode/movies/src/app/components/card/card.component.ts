import { Component, OnInit, Input } from '@angular/core';
import { DetailMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() movie: DetailMovie;

  constructor() { }

  ngOnInit(): void {
  }
}
