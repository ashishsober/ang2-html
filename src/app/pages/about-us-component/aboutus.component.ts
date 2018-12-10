import { Component } from '@angular/core';

@Component({
  selector: 'ngv-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutUsComponent {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "assets/vrd-group1.jpeg"},
    {img: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}
  ];

}
