import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  isEmailValid: boolean = false;
  age;
  showAge;
  isSubmitted: boolean = false;
  formData  = {
    email: '',
    password: '',
    course: '',
    gender: ''
  }
  defaultValue = 'Angular';
  defaultGender = 'Female';
  courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  emails='';

  constructor(private objService: MyserviceService,private route: Router) { }

  ngOnInit() {
    this.objService.print();
  }

  ageCalculator() {
    this.showAge = this.objService.ageCalculator(this.age);
  }


  login(form: NgForm) {
    this.route.navigate(['/userdetails']);
    this.isSubmitted = true;
    console.log(form);

    

 this.formData.email = form.value.email;
 this.formData.password = form.value.password;
 this.formData.course = form.value.course;
 this.formData.gender = form.value.gender;
//form.reset();

form.controls['course'].setValue('Angular');
form.controls['gender'].patchValue('Female');

// POST api/ Saveuser(formData);

   this.objService.display();

  }
  
  checkemail(email){
    console.log(email.value);

    const domain = email.value.substring(email.value.lastIndexOf('@') + 1); // gmail.com
    
    if(domain.toLowerCase() === 'codemindtechnology.com') 
    {
      this.isEmailValid = false;
    } else {
      this.isEmailValid = true;
    }
  }

}
