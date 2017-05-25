import { Component, OnInit } from '@angular/core';
import { Auction } from '../app.model'
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms'
import { AuctionSerivce } from '../services/auction.service'

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html'
})
export class AuctionsListComponent implements OnInit {

  auctions: Array<any>;
  myForm: FormGroup;
  name: AbstractControl;
  price: AbstractControl;

  constructor(fb: FormBuilder, private auctionSerivce: AuctionSerivce) { 
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    
    });

    this.name = this.myForm.controls['name'];
    this.price = this.myForm.controls['price'];
  }

  mySubmit(value: Auction) {
      this.auctionSerivce.add(value);
  }

  deleteAuction(name: string) {
      this.auctionSerivce.remove(name);
  }

  ngOnInit() {
    this.auctions =  this.auctionSerivce.getAll();
  }

}
