import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html'
})
export class AuctionComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  price: number;

  @Output()
  clickEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  auctionSelected() {
    this.clickEmitter.emit(this.name);
  }

}
