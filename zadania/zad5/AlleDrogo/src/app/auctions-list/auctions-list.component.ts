import { Component, OnInit } from '@angular/core';
import { Auction } from '../app.model'
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html'
})
export class AuctionsListComponent implements OnInit {

  auctions: Auction[];
  myForm: FormGroup;
  auctionName: AbstractControl;
  auctionPrice: AbstractControl;


  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'auctionName': ['', Validators.required],
      'auctionPrice': ['', Validators.required]
    
    });

    this.auctionName = this.myForm.controls['auctionName'];
    this.auctionPrice = this.myForm.controls['auctionPrice'];

    this.auctions = [ 
      {"name": "Rower", "price": 800},
      {"name": "Lalka", "price": 70},
      {"name": "Pralka", "price": 1200},
      {"name": "Telefon", "price": 1500}
    ];
  }

  mySubmit(value: any) {
    this.auctions.push(new Auction(value.auctionName, value.auctionPrice));
    this.myForm.reset();
  }

  deleteAuction(value: any) {
    console.log("Auction removed");
  }

  ngOnInit() {
  }

}
