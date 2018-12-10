import { Injectable, Input, Output, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch';



@Injectable()
export class DataService {
      @Output() fire: EventEmitter<any> = new EventEmitter();


      //use promisess here to call asynchronous call,If the data is coming from the remote server
      //so that over code will not get blocked. for the waiting of the respond from the server
      constructor(private http: Http) {
            console.log('shared service started');
      }
 
      /**
       * firring api's
       */

      getHostname(){
            let hostname:string='';
            if (window.location.host === 'localhost:4200'){
                  hostname = "http://localhost:1337";
            } else {
                  hostname = 'http://ec2-3-16-206-69.us-east-2.compute.amazonaws.com:1337';
            }
            console.log(hostname);
            return hostname;
      }

      postContact(data): Observable<any> {
            let getHostname=this.getHostname();
            let url = getHostname.concat('/application/contactVrd')
            return this.http.post(url, data).pipe(map(this.extractData)).pipe(catchError(this.handleError));
                  //.map(this.extractData)
                  //.catch(this.handleError);
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
            //return errMsg;
      }
}