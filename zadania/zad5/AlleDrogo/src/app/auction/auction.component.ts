import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms'

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

  constructor(fb: FormBuilder) {
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
    if(value.name != ""){
      this.name = value.name;
    }
    if(value.price != ""){
      this.price = value.price;
    }
  }

  deleteAuction(){
    console.log(`${this.name} has been emitted.`)
    this.clickEmitter.emit(this.name);
  }
}
