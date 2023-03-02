import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.myReactiveForm = new FormGroup({
      'firstname' : new FormControl(null, [Validators.required]),
      'lastname' : new FormControl(null, [Validators.required]),
      'age' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required,Validators.email]),
      'phone' : new FormControl(null, [Validators.required]),
      'city' : new FormControl(null, [Validators.required]),
      'gender' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required]),
      'cpassword' : new FormControl(null, [Validators.required]),
    });
  }

}
