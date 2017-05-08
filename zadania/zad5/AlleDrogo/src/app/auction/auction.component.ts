import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html'
})
export class AuctionComponent implements OnInit {


  editForm: FormGroup;
  editName: AbstractControl;
  editPrice: AbstractControl;

  @Input()
  name: string;
  @Input()
  price: number;

  @Output()
  clickEmitter: EventEmitter<string> = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.editForm = fb.group({
      'editName': [this.name],
      'editPrice': [this.price]
    
    });

    this.editName = this.editForm.controls['editName'];
    this.editPrice = this.editForm.controls['editPrice'];

   }

  ngOnInit() {
  }

  auctionSelected() {
    this.clickEmitter.emit(this.name);
  }

  updateAuction(value: any){
    console.log(value);
  }

  

}
