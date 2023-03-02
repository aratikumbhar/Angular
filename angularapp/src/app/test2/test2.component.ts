import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  //template: `<h2> This is test component <h2>`, we can write like this. This is string interpolation
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  employee : Employee;
  @Input() child :string;   // syntax is []
  // @Output() fromChild : EventEmitter<string> = new EventEmitter<string>();   // syntax is (fromChild)
  @Output() objFromChild : EventEmitter<Employee> = new EventEmitter<Employee>();

  count: number = 0;
  firstName : string = 'India';

  lastname: string = 'Bhai';

  userName : string = "";
  constructor() { }

  ngOnInit() {
    console.log(this.child);
  }

  onButtonClick() {
    let counts = this.count += 1;
    console.log(counts); 
  }
  onKeyUp(value){
    console.log('$event', value);
  }

  onReset() {
   this.userName = "";
  }

  sendToParent() {
    // this.fromChild.emit(this.lastname);  we can use here string
    this.employee = new Employee();
    this.employee.name = 'John';
    this.employee.id = 12;
    this.employee.salary = 2500000;
    this.objFromChild.emit(this.employee);
  }

}
