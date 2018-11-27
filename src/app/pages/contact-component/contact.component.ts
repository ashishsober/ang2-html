import { Component } from '@angular/core';

@Component({
  selector: 'ngv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  selectboxData= [{
    "CODE_DESC": "Google Apps",
    "CODE_VALUE": 'google_apps'
  },
  {
    "CODE_DESC": "Cloud Computing",
    "CODE_VALUE": 'cloud_computing'
  },
  {
    "CODE_DESC": "App Engine Development",
    "CODE_VALUE": "app_engine_development"
  },
  {
    "CODE_DESC": "Other",
    "CODE_VALUE": "other"
  }
  ];
}
