import { Component } from '@angular/core';

@Component({
  selector: 'ngv-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent {
  slides = [
    {img: "assets/banner1.jpg",text:'Software-Development'},
    {img: "assets/banner2.jpg",text:'Search engine optimization'},
    {img: "assets/banner3.jpg",text:'Responsive websites'},
    {img: "assets/banner12.jpg",text:''}
  ];
}

