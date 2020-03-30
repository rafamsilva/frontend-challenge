import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchField = new FormControl("");
  @Output() onSearch = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(value => {
        this.onSearch.emit(value);
      });
  }
}
