import { Component } from '@angular/core';

@Component({
  selector: 'ngv-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent {
  jobData = [
    {
      title: 'SAP PP-PI Consultant',
      location: 'Bengaluru',
      jobType: 'Permanent Position',
      experience: 'Requires 7+ years’ experience in delivering solutions within the SAP PP-PI module.Able to setup all PP-PI master data',
      requirement: ['7+ years of SAP configuration for PP-PI', 'Experience in setting up Master data for: PPDS, Planning, S&OP, LTP',
        'Chemical Industry experience preferred and a plus', 'Experience in MRP processes and planning, make to order and make to stock scenarios',
        'Knowledge of APO planning (PPDS), Plant maintenance, QM and MM a plus', 'Batch management knowledge required ',
        'Material Forecasting and Demand Management a plus', 'LTP, MPS and SOP a plus', 'Excellent verbal and written communication skills'
      ]
    },
    {
      title: 'Syteline Functional Consultant',
      location: 'Bengaluru',
      jobType: 'Permanent Position',
      experience: 'We are looking for Syteline functional consultant to join our Syteline team and support us in our existing requirement.4+ years of Syteline Experience is required.',
      requirement: []
    },
    {
      title: 'Power BI Consultant',
      location: 'Bengaluru',
      jobType: 'Contract',
      experience: 'We are looking for a Power BI Consultant who has good experience to build complex data model in power BI and develop advance report/Cubes in Power BI.',
      requirement: []
    },
    {
      title: '.Net Consultant',
      location: 'Bengaluru',
      jobType: 'Permanent Position',
      experience: '4+ Years',
      requirement: ['Web applications configurations in cloud and user support for the application', 'Develop reports using SQL Server Reporting Services, Power BI and other reporting tools',
        'Configure and maintain Microsoft Azure PaaS environments', 'Microsoft Azure cloud platform technologies', 'Visual Studio 2013 or later',
        'ASP.NET, C#  and T-SQL.', 'Solid understanding of software testing, continuous integration & continuous delivery', 'Web technologies – HTML, CSS, JS'
      ]
    }
  ]
}
