import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactassign',
  templateUrl: './reactassign.component.html',
  styleUrls: ['./reactassign.component.css']
})
export class ReactassignComponent implements OnInit {

  myReactiveForm : FormGroup;
  submitted = false;
  subscriptions = ["Basic", "Advanced", "Pro"];
  selectedSubscription = "Advanced";

  constructor() {
    this.createForm();
   }

  ngOnInit() { }

  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'subscript' : new FormControl(null),
      'password' : new FormControl(null, [Validators.required]),
      'date' : new FormControl(null, [Validators.required])
    })
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

 ngSubmit(){
  this.submitted = true;

  if (this.myReactiveForm.valid) {
    // Submit form
  }

 }
 
}
