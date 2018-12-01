import { Component } from '@angular/core';

@Component({
  selector: 'ngv-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  managementList=[{
    "name":"Vivek Kumar",
    "position":"Managing Director",
    "profileImage":"assets/vivek_sir.jpeg",
    "discription":"As Director of VRD NETWORK he is responsible for VRD NETWORK's day-to-day-operations, as well as leading the company's product development and technology strategy. Under his leadership, VRD NETWORK has broadened its offerings while maintaining a culture of strong innovation. His background uniquely prepares him to lead VRD NETWORK toward technological solutions that focus on users.",
    "emailid":"vivek.rai@vrdnetwork.com"
  },
  {
    "name":"VENKAT NAGESH",
    "position":"Associate Director -  Delivery, Resource Management",
    "profileImage":"assets/img1.jpg",
    "discription":"As Director of VRD NETWORK he is responsible for VRD NETWORK's day-to-day-operations, as well as leading the company's product development and technology strategy. Under his leadership, VRD NETWORK has broadened its offerings while maintaining a culture of strong innovation. His background uniquely prepares him to lead VRD NETWORK toward technological solutions that focus on users.",
    "emailid":"hr@vrdnetwork.com"
  },
  {
    "name":"MOHIT KEDIA",
    "position":"Sales Operations and Business Development Officer",
    "profileImage":"assets/img1.jpg",
    "discription":"As Director of VRD NETWORK he is responsible for VRD NETWORK's day-to-day-operations, as well as leading the company's product development and technology strategy. Under his leadership, VRD NETWORK has broadened its offerings while maintaining a culture of strong innovation. His background uniquely prepares him to lead VRD NETWORK toward technological solutions that focus on users.",
    "emailid":""
  }]
}
