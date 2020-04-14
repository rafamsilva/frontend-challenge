import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = new FormControl("");
  @Output() onSearch = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe(value => {
        this.onSearch.emit(value);
      });
  }

}
