import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveassign',
  templateUrl: './directiveassign.component.html',
  styleUrls: ['./directiveassign.component.css']
})
export class DirectiveassignComponent implements OnInit {

  pass:string = "CODEMIND TECHNOLOGY";
  count: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  isShow = false;
  currentTime():any{
    const date = new Date();
    return date;
  }

  toggleDisplayDetails() {
    this.isShow = !this.isShow;
    // let counts=this.count +=1;
    // counts=this.count;
    // console.log(counts);
    this.count.push(this.count.length+1);
    }


}
