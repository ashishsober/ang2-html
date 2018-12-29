import { Component } from '@angular/core';

@Component({
  selector: 'ngv-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutUsComponent {

  slides = [
    {img: "assets/group-pic/vrd-group1.jpeg"},
    {img: "assets/group-pic/vrd-group2.jpeg"},
    {img: "assets/group-pic/vrd-group3.jpeg"},
    {img: "assets/group-pic/vrd-group4.jpg"}
  ];
  count=0;
  next(){
    if(this.count<this.slides.length-1){
      this.count++;
    }
  }
  prev(){
    if(this.count>0){
      this.count--;
    }
  }
}
