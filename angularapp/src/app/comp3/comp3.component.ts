import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  userName;

  constructor(private _utilityService: UtilityService) { 
    this._utilityService.userName.subscribe(res => {
      console.log('data comming from subject', res)
      this.userName = res;
    }, err => {
      console.log('error occured', err);
    })
  }

  ngOnInit() {
  }

  updateUserName(uname)
  {
    this.userName = uname.value;
    console.log(uname.value);

    this._utilityService.userName.next(uname.value);
  }

}
