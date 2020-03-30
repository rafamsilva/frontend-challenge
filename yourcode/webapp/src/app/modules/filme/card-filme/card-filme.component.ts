import { Component, OnInit, Input } from '@angular/core';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.scss']
})
export class CardFilmeComponent implements OnInit {

  @Input() filme!: Filme;

  constructor() { }

  ngOnInit() {
  }

}
