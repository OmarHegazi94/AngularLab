import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  track:string = "koko";
  salary:number = 2000;

  @ViewChild("departments",null) div:ElementRef;

  displayDivData(){
    alert(this.div.nativeElement.tagName + "is Clicked!");
  }

  darkColorState:boolean = true;
  greenColorState: boolean = false;

  changeColor() {
    this.darkColorState = !this.darkColorState;
    this.greenColorState = !this.greenColorState;
  }

  trHeight:number = 70;

  changeHeight(){
    this.trHeight++;
  }

  constructor() { }

}
