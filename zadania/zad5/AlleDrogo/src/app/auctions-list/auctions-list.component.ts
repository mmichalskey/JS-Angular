import { Component, OnInit } from '@angular/core';
import { Auction } from '../app.model'
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html'
})
export class AuctionsListComponent implements OnInit {

  auctions: Array<any>;
  myForm: FormGroup;
  name: AbstractControl;
  price: AbstractControl;


  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    
    });

    this.name = this.myForm.controls['name'];
    this.price = this.myForm.controls['price'];

    this.auctions = [ 
      {"name": "Rower", "price": 800},
      {"name": "Lalka", "price": 70},
      {"name": "Pralka", "price": 1200},
      {"name": "Telefon", "price": 1500}
    ];
  }

  mySubmit(value: Auction) {
    console.log(new Auction(value.name, value.price));
    this.auctions.push(new Auction(value.name, value.price));
  }

  deleteAuction(name: string) {
      const index: number = this.auctions.findIndex(i => i.name === name);
      this.auctions.splice(index, 1);
  }

  ngOnInit() {
  }

}
