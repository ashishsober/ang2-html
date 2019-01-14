import { Component } from '@angular/core';

@Component({
  selector: 'ngv-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  managementList = [{
    name: "Vivek Kumar",
    position: "Chairman & CEO",
    profileImage: "assets/vivek_sir.jpeg",
    discription: "As Chief Executive Officer of VRD NETWORK, Under his leadership VRD NETWORK has broadened its offerings while maintaining a culture of strong innovation. His background uniquely prepares him to lead VRD NETWORK towards technological solutions that focus on users.",
    emailid: "director@vrdnetwork.com"
  },
  {
    name: "P. VENKAT",
    position: "Associate Director -  Delivery, Resource Management",
    profileImage: "assets/user-tie-solid.svg",
    discription: "Oversee , implement and manage the Recruitment process of compamy. Responsible for the planning, design and implementation of cost effective employee benefit programs consistent with the Company’s objectives for employees.",
    emailid: "hr@vrdnetwork.com"
  },
  {
    name: "PRANJUL",
    position: "HR Executive",
    profileImage: "assets/user-tie-solid.svg",
    discription: "Having worked across industries in both MNC and startup ecosystems, Pranjul assets fine knowledge of employee relations and training. She oversees planning, directing & coordinating administrative functions to set up a strong governance and execution function and build high-end capabilities focusing on long term growth.",
    emailid: "pranjul@vrdnetwork.com "
  }]
}
