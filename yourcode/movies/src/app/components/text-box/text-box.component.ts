import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  textForArray(info: string) {
    if (info)
      return info.split(",");
  }
}
