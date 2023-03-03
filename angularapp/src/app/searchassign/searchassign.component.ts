import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-searchassign',
  templateUrl: './searchassign.component.html',
  styleUrls: ['./searchassign.component.css']
})
export class SearchassignComponent implements OnInit {

  products = {};
  users;
  userData;
  namesearch: string = '';
  constructor(private myservice: MyserviceService, private demoService: DemoService) { }

  ngOnInit() {
    this.products = this.myservice.products;
    // this.demoService.getUsers().subscribe(res => {
    //   console.log('user api results', res);
    // }, err => {
    //   console.log(err);
    // })
    this.demoService.getUsers().subscribe(res=>{
      console.log(res);      
      this.userData=res;
    })
  }

}
