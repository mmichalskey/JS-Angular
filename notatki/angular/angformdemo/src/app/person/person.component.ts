import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
  firstName: AbstractControl;
  lastName: AbstractControl;
  you: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.compose([Validators.maxLength(5), Validators.required, this.myLastNameValidator])]
    });

    this.firstName = this.myForm.controls['firstName'];
    this.lastName = this.myForm.controls['lastName'];

  }

  mySubmit(value: any) {
    console.log(value);
  }
  myLastNameValidator(control: FormControl) {
    if (control.value.match(/^Bol/i)) {
      return {
        bolekValue: true
      }
    }
  }

  ngOnInit() {
  }

}
