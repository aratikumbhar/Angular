import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

   countries = [
    { id: '1', name: 'India'},
    { id: '2', name: 'Australia'},
    { id: '3', name: 'America'}
   ]

   arrStates: Array<any> = [
    {id: 's1', parentId: '1', name: 'Maharashtra'},
    {id: 's2', parentId: '1', name: 'Gujarat'},
    {id: 's3', parentId: '2', name: 'New South Wales'},
    {id: 's4', parentId: '2', name: 'Victoria'},
    {id: 's5', parentId: '3', name: 'New York'},
    {id: 's6', parentId: '3', name: 'San Antonio'},
   ]

   states: Array<any> = []; 

  constructor() { }

  ngOnInit() {
  }

  onCountrySelect(val: any) {
    this.states = this.arrStates.filter(c => c.parentId == val.target.value);
  }

}
