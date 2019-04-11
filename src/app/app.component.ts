import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public right50:boolean;
  constructor(private dataService:DataService){}
  ngOnInit(){
    this.dataService.populate();
  }
}