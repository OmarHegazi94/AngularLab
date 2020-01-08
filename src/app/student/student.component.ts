import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  imgPath:string = ".././assets/1.jpg";

  student:Student[]=[

    { Name:"Omar",Id:1,Age:26,Disabled:true },
    { Name:"KOKO",Id:2,Age:30, Disabled:true },
    { Name:"BOBO",Id:3,Age:30, Disabled:false },
    { Name:"SOSO",Id:10,Age:30, Disabled:false },
    { Name:"LOLO",Id:6,Age:30, Disabled:false },

  ];

  constructor() { 

  }
  
}
