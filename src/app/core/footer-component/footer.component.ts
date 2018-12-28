import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  constructor(private dataService:DataService){}

  gsubmit() {
    this.dataService.getAuth()
      .then(result => {
          console.log(result.user.photoURL+"  ----   "+result.user.email);
          // sessionStorage.setItem('user_uid', result.user.uid);
          // sessionStorage.setItem('user_photoUrl', result.user.photoURL);
          // sessionStorage.setItem('user_emalid', result.user.email);          
      });
  }
}