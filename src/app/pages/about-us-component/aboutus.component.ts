import { Component } from '@angular/core';

@Component({
  selector: 'ngv-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutUsComponent {

  slides = [
    {img: "assets/vrd-group1.jpeg"},
    {img: "assets/vrd-group2.jpeg"},
    {img: "assets/vrd-group3.jpeg"},
    {img: "assets/vrd-group4.jpg"}
  ];

}
