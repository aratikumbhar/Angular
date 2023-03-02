import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  age;
  showAge;
  isSubmitted: boolean = false;
  myReactiveForm: FormGroup;
  notAllowedNames = ['Jack', 'Harry'];
  
  constructor(private _fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDeatils' : {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gamil.com'
    //     },
    //     'course': 'HTML',
    //     'skills': ['angular']
    //   })
    // })

    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'username': 'Codemind123',
          'email': 'codemind@gamil.com'
        }
      })
    }, 5000)
  }

  ageCalculator() {
    let objMyserviceService = new MyserviceService();
    this.showAge = objMyserviceService.ageCalculator(this.age);
  }

  createForm()
  {
    // this.myReactiveForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //     'username' : new FormControl(null, [Validators.required, this.NaNames.bind(this) ]),
    //     'email': new FormControl(null, [Validators.required, Validators.email])
    //   }),
    //   'course': new FormControl(null, [Validators.required]),
    //   'skills': new FormArray([
    //     new FormControl(null, Validators.required)
    //   ])
    // });
    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', [Validators.required, this.NaNames.bind(this) ]],
        'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails)
      }),
      course: ['Angular'],
      skills: this._fb.array([])
     })
  }

  OnSubmit() {
    this.isSubmitted = true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }

  OnAddSkills() {
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  NaNames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    } else {
      return null;
    }
  }

  NaEmails(control: FormControl) : Promise<any> | Observable<any> 
  {
    const myResponse = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myResponse;
  }


}
