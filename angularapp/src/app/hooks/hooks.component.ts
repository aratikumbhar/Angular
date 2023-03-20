import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges {

  @Input() parentData: number;

  constructor() {
    console.log('HooksComponent constructor called');
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksComponent ngOnChanges called', changes);
  }

}
