import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { RapidapiService } from './services/rapidapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data = 0;

  

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
  // data = {
  //   name : 'Codemind',
  //   dept : 'IT'
  // }

  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  
  serverId : number = 20;

  
  constructor(private rapidapiService: RapidapiService) {
    this.getValueFromServer();
  }

  ngOnInit(): void {
    this.rapidapiService.getFinance().subscribe(res => {
      console.log('rapid res', res);
    });
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


