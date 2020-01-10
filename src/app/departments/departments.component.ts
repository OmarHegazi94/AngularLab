import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})

export class DepartmentsComponent {
  track:string = 'koko';
  salary:number = 2000;

  darkColorState:boolean = true;
  greenColorState: boolean = false;

  trHeight:number = 70;

  @ViewChild('departments', null) div: ElementRef;

  displayDivData() {
    alert(this.div.nativeElement.tagName + ' is Clicked!');
  }

  changeColor() {
    this.darkColorState = !this.darkColorState;
    this.greenColorState = !this.greenColorState;
  }

  changeHeight() {
    this.trHeight++;
  }

  constructor() { }

}
