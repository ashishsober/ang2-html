import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Http, Response } from '@angular/http';


@Injectable()
export class CareerService {
     // subject = new Rx.Subject();
     // userModal: user_Data;
      constructor(private http: Http) {
       //     this.userModal = new user_Data();
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
}