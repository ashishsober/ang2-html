import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import * as Rx from "rxjs";
import { user_Data } from './classes';

@Injectable()
export class DataService {
      @Output() fire: EventEmitter<any> = new EventEmitter();
      subject = new Rx.Subject();
      userModal: user_Data;
      //use promisess here to call asynchronous call,If the data is coming from the remote server
      //so that over code will not get blocked. for the waiting of the respond from the server
      constructor(private http: Http) {
            console.log('shared service started');
            this.userModal = new user_Data();
      }

      getHostname() {
            let hostname: string = '';
            if (window.location.host === 'localhost:4200') {
                  hostname = "http://localhost:1337";
            } else {
                  hostname = 'http://ec2-3-17-146-125.us-east-2.compute.amazonaws.com:1337';
            }
            return hostname;
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
                        this.subject.next(data.application.response_action);
                  }))
                  .pipe(catchError(this.handleError));
      }
}