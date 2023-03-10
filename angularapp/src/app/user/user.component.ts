import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  products = {};
  users = [];
  userData;
  namesearch: string = '';

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    // this.products = this.myservice.products;
    // this.demoService.getUsers().subscribe(res => {
    //   console.log('user api results', res);
    // }, err => {
    //   console.log(err);
    // });
    this.demoService.getUsers().subscribe(res=>{
      console.log(res);      
      this.userData=res;
    });

  }

}
