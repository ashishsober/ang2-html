import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import * as Rx from "rxjs";
import { user_Data } from './classes';
import { HttpHeaders, HttpClient, HttpParams,HttpErrorResponse} from '@angular/common/http';

@Injectable({
      providedIn:'root'
})
export class DataService {
      private currentUserSubject = new Rx.BehaviorSubject<user_Data>({} as user_Data);
      public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

      //subject = new Rx.ReplaySubject(1);

      constructor(private http: HttpClient) {
            console.log('shared service started');
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


      // private extractData(res: Response) {
      //       let body = res.json();
      //       return body || {}
      // }

      private handleError(error: HttpErrorResponse) {
            // In a real world app, we might use a remote logging infrastructure
            let errMsg: string;
            if (error.error instanceof ErrorEvent) {
                  console.error('An error occurred:', error.error.message);
            } else {
                  // The backend returned an unsuccessful response code.
                  // The response body may contain clues as to what went wrong,
                  console.error(
                        `Backend returned code ${error.status}, ` +
                        `body was: ${error.error}`);
            }
            return throwError('Something bad happened; please try again later.');
      }


      googleAuthCall() {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/auth/google');
            window.open(url, "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
            window.addEventListener('message', (message) => {
                  this.setUserInfo(message.data.user);
            });
      }

      setUserInfo(user: any) {
                this.currentUserSubject.next(user);
                 window.sessionStorage['accessToken'] = user.accessToken;
      }

      getAccessToken():String {
            return window.sessionStorage.getItem("accessToken")
      }

      getCurrentUser(): user_Data {
            console.log("last emmited value"+this.currentUserSubject.value)
            return this.currentUserSubject.value;
      }



      authenticateEmp(data: any): Observable<any> {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/application/auth');
            return this.http.post(url, data)
                  .pipe(map((result) => {
                        this.setUserInfo(result);
                        //return result;
                  }))
                  .pipe(catchError(this.handleError));;
      }

      logout(data: any): Observable<any> {
            let getHostname = this.getHostname();
            let url = getHostname.concat('/application/logout');
            return this.http.post(url, data)
                  .pipe(map((data) => {
                        window.sessionStorage.clear();
                        // Set current user to an empty object
                        this.currentUserSubject.next({} as user_Data);
                        return data;
                  }))
                  .pipe(catchError(this.handleError));;
      }
}