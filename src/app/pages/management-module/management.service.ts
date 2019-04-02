import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import * as Rx from "rxjs";
import { HttpHeaders, HttpClient, HttpParams,HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ManagementService {
    //subject = new Rx.Subject();
    //userModal: user_Data;
    managementList = [];
  
    constructor(private http: HttpClient) {
       // this.userModal = new user_Data();
    }

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

    postManagement(data: any): Observable<any> {
        let getHostname = this.getHostname();
        let url = getHostname.concat('/application/managementVrd');
        return this.http.post(url, data).pipe(catchError(this.handleError));
    }

    getManagement(): Observable<any> {
        let getHostname = this.getHostname();
        let url = getHostname.concat('/application/managementVrd');
        return this.http.get(url).pipe(catchError(this.handleError));
    }
    deleteManagement(id: string): Observable<any> {
        let getHostname = this.getHostname();
        let url = getHostname.concat('/application/managementVrd/delete/');
        url = url + id;
        return this.http.get(url).pipe(catchError(this.handleError));
    }

    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body || {}
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
}