import { Component } from '@angular/core';

@Component({
  selector: 'ngv-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss']
})
export class SoftwareDevelopmentComponent {
  slides = [
    {img: "assets/banner1.jpg",text:'Software-Development'},
    {img: "assets/banner2.jpg",text:'Search engine optimization'},
    {img: "assets/banner3.jpg",text:'Responsive websites'},
    {img: "assets/banner12.jpg",text:''}
  ];
}

