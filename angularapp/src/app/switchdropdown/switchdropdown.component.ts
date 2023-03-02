import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdropdown',
  templateUrl: './switchdropdown.component.html',
  styleUrls: ['./switchdropdown.component.css']
})
export class SwitchdropdownComponent implements OnInit {

  selectedProduct: string;

  constructor() { }

  ngOnInit() {
  }

  getProductValue(val) {
    console.log('seleced value from dropdown', val.target.value);
    let selectedValue = val.target.value;
    this.selectedProduct = selectedValue;
  }

}
