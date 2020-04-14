import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() color: string;
  @Input() column: string;
  @Input() icon: string;
  @Input() isFavorite?: boolean;
  @Input() type: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickbutton() {
    this.isFavorite = !this.isFavorite;
    this.onClick.emit(this.isFavorite);
  }

  path(icon) {
    return 'assets/images/svg/' + icon;
  }
}
