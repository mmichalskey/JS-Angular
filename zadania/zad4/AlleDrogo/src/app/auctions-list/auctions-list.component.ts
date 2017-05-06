import { Component, OnInit } from '@angular/core';
import { Auction } from '../app.model'

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html'
})
export class AuctionsListComponent implements OnInit {

  auctions: Auction[];

  constructor() { 
    this.auctions = [ 
      {"name": "Rower", "price": 800},
      {"name": "Lalka", "price": 70},
      {"name": "Pralka", "price": 1200},
      {"name": "Telefon", "price": 1500}
    ];
  }

  ngOnInit() {
  }

}
