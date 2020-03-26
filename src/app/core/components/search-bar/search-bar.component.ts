import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  @Input() searchField: FormControl;
  @Output() searchEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  search() {
    this.searchEvent.emit();
  }
}
