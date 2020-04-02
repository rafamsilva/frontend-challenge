import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  @Input() width = '2em';
  @Input() height = '2em';
  @Input('load-type') loadType = 'spinner-grow';

  constructor() { }

}
