import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchField: FormControl

  searches: string[] = [];

  constructor() {
    this.searchField = new FormControl();
    this.searchField.valueChanges.subscribe(
      searchItem => this.searches.push(searchItem)
    );
   }

  ngOnInit() {
  }

}
