import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  
  @Input() width;
  @Input() height;

  constructor() { }

  ngOnInit(): void {
  }

}
