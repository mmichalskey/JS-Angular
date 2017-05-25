import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms'
import { AuctionSerivce } from '../services/auction.service'

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html'
})
export class AuctionComponent implements OnInit {


  @Input()
  name: AbstractControl;
  @Input()
  price: AbstractControl;
  @Input()
  editForm: FormGroup;

  @Output()
  clickEmitter: EventEmitter<AbstractControl> = new EventEmitter();

  constructor(fb: FormBuilder,  private auctionSerivce: AuctionSerivce) {
    this.editForm = fb.group({
      'name': [''],
      'price': ['']
    });
    
   }

  ngOnInit() {
  }

  auctionSelected() {
    this.clickEmitter.emit(this.name);
    this.clickEmitter.emit(this.price);

  }

  updateAuction(value: any){
    this.auctionSerivce.update(value, this.name);
  }

  deleteAuction(){
    this.clickEmitter.emit(this.name);
  }
}
