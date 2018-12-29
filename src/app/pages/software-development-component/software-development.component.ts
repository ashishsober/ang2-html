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

  techno_learn =[
    {img:"assets/tech-icons/angular6.png",title:"Angular 6"},
    {img:"assets/tech-icons/react.png",title:"React"},
    {img:"assets/tech-icons/typescript.png",title:"Typescript"},
    {img:"assets/tech-icons/sapui5.png",title:"SAPUI5"},
    {img:"assets/tech-icons/firebase.png",title:"Firebase"},
    {img:"assets/tech-icons/bootstrap.png",title:"Bootstrap"},
    {img:"assets/tech-icons/html5.png",title:"HTML5"},
    {img:"assets/tech-icons/css.png",title:"CSS 3"},
    {img:"assets/tech-icons/sass.png",title:"SASS"},
    {img:"assets/tech-icons/nodejs.png",title:"NodeJs"},
    {img:"assets/tech-icons/mongodb.png",title:"Mongo DB"},
    {img:"assets/tech-icons/java.png",title:"Java"},
    {img:"assets/tech-icons/aws.png",title:"AWS"}
  ]

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

