import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as Rx from "rxjs";
import { user_Data } from './classes';

@Injectable({
      providedIn: 'root',
})
export class DataService {
      @Output() fire: EventEmitter<any> = new EventEmitter();
      subject = new Rx.Subject();
      userModal: user_Data;
      managementList=[];
      //use promisess here to call asynchronous call,If the data is coming from the remote server
      //so that over code will not get blocked. for the waiting of the respond from the server
      constructor(private http: Http) {
            console.log('shared service started');
            this.userModal = new user_Data();
            
      }

      /**
       * firring api's
       */
      genderboxData: Array<any> = [
            {
                  "CODE_DESC": "Male",
                  "CODE_VALUE": "male"
            },
            {
                  "CODE_DESC": "Female",
                  "CODE_VALUE": "female"
            }
      ];
      nightShiftboxData: Array<any> = [
            {
                  "CODE_DESC": "Yes",
                  "CODE_VALUE": "yes"
            },
            {
                  "CODE_DESC": "No",
                  "CODE_VALUE": "no"
            }
      ];
      technologiesSelectboxData: Array<any> = [
            {
                  "CODE_DESC": "App Engine Development",
                  "CODE_VALUE": "app_engine_development"
            },
            {
                  "CODE_DESC": "Software Development",
                  "CODE_VALUE": "software_development"
            },
            {
                  "CODE_DESC": "ERP Solution",
                  "CODE_VALUE": "erp_solution"
            },
            {
                  "CODE_DESC": "Cloud Computing",
                  "CODE_VALUE": 'cloud_computing'
            },
            {
                  "CODE_DESC": "IOT",
                  "CODE_VALUE": 'iot'
            },
            {
                  "CODE_DESC": "Other",
                  "CODE_VALUE": "other"
            }
      ];
      contact_address: Array<any> = [
            {
                  "office": "Regd. OFFICE",//mandatory fields
                  "address_line1": "127 Vaishali Nagar,",//mandatory fields
                  "address_line2": "Bhopal (M.P) / India 4620016",//mandatory fields
                  "address_line3": "",
                  "address_line4": "",
                  "contact": "0755-4272034",
                  "email_id": ""
            },
            {
                  "office": "ADMIN OFFICE",
                  "address_line1": "17 Malviya Nagar , ",
                  "address_line2": "Bhopal (M.P) / India ",
                  "address_line3": "",
                  "address_line4": "",
                  "contact": "0755-4276923",
                  "email_id": ""
            },
            {
                  "office": "DELHI",
                  "address_line1": "1201 NIRMAL TOWER",
                  "address_line2": "Barakhamba Road",
                  "address_line3": "New Delhi, India 110 001",
                  "address_line4": "",
                  "contact": "",
                  "email_id": "contact@vrdnetwork.com"
            },
            {
                  "office": "BANGALORE",
                  "address_line1": "Manyata Embassy Business Park",
                  "address_line2": "Ground Floor, E1 Block, Beech Building",
                  "address_line3": "Outer Ring Road",
                  "address_line4": "Bangalore - (Karnataka) India 560 045",
                  "contact": "080-4276-4665",
                  "email_id": "hr@vrdnetwork.com"
            }];

      getHostname() {
            let hostname: string = '';
            if (window.location.host === 'localhost:4200') {
                  hostname = "http://localhost:1337";
            } else {
                  //console.log("window.location.host --->" + window.location.host);
                  hostname = 'http://ec2-3-17-146-125.us-east-2.compute.amazonaws.com:1337';
            }
            return hostname;
      }

      postContact(data: any): Observable<any> {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/application/contactVrd');
            return this.http.post(url, data).pipe(map(this.extractData)).pipe(catchError(this.handleError));
      }

      postCareer(data: any): Observable<any> {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/application/careerVrd');
            return this.http.post(url, data).pipe(map(this.extractData)).pipe(catchError(this.handleError));
      }

      private extractData(res: Response) {
            let body = res.json();
            return body || {}
      }

      private handleError(error: Response) {
            // In a real world app, we might use a remote logging infrastructure
            let errMsg: string;
            if (error instanceof Response) {
                  const body = error.json() || '';
                  const err = body.error || JSON.stringify(body);
                  errMsg = err;//`${error.status} - ${error.statusText || ''} ${err}`;
            } else {
                  errMsg = "error";
            }
            return throwError(errMsg);
      }


      googleAuthCall() {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/auth/google');
            window.open(url, "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
            let listener = window.addEventListener('message', (message) => {
                  //message will contain facebook user and details
                  this.subject.next(message.data.user);
                  this.userModal.setUserInfo(message.data.user);
            });
            return listener;

      }

      authenticateEmp(data: any): Observable<any> {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/application/auth');
            return this.http.post(url, data)
                  .pipe(map(this.extractData))
                  .pipe(map((result) => {
                        this.userModal.setUserInfo(result);
                        return result;
                  }))
                  .pipe(catchError(this.handleError));
      }

      logout(data: any): Observable<any> {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/application/logout');
            return this.http.post(url, data)
                  .pipe(map(this.extractData))
                  .pipe(map((data) => {
                        sessionStorage.clear();
                        this.subject.next(data.action);
                  }))
                  .pipe(catchError(this.handleError));
      }

      postManagement(data: any): Observable<any> {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/application/managementVrd');
            return this.http.post(url, data).pipe(map(this.extractData)).pipe(catchError(this.handleError));
      }

      getManagement(): Observable<any> {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/application/managementVrd');
            return this.http.get(url).pipe(map(this.extractData)).pipe(catchError(this.handleError));
      }

}