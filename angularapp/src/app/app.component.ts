import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { DemoService } from './services/demo.service';
import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parantToChild : string = "I am coming from parent";

  posts = [
    {
      title: 'Pam tree',
      content: 'I like this tree'
    },
    {
      title: 'Pam tree',
      content: 'I like this tree'
    }
  ]

  title = 'angularapp';
  name = 'Arati';
  empCount;
  data = {
    name : 'Codemind',
    dept : 'IT'
  }

  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  
  serverId : number = 20;
  products = {};
  users;
  userData;
  
  constructor(private myservice: MyserviceService, private demoService: DemoService) {
    this.getValueFromServer();
  }

  ngOnInit(): void {
    this.products = this.myservice.products;
    this.demoService.getUsers().subscribe(res => {
      console.log('user api results', res);
    }, err => {
      console.log(err);
    })
    // this.demoService.getUsers().subscribe(res=>{
    //   console.log(res);      
    //   this.userData=res;
    // })
  }

  getValueFromServer(){
    this.empCount = 10000;
  }

    Now = new Date();
    testnew() {
     alert('event raised');
    }
    onParent(val : Employee) {
      console.log('from child to parent emp', val);
    }

  }


