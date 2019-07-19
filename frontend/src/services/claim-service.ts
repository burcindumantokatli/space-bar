import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../environments/environment";
import {ajax, AjaxResponse} from 'rxjs/ajax'
import {Observable} from "rxjs";
import {ResponseClaimType} from "../types/response-claim-type";

@Injectable()
export class ClaimService {
    constructor(private http: HttpClient) {
    }

    getObservable(): Observable<ResponseClaimType> {
        return this.http.get<ResponseClaimType>(environment.apiUrl + '/get-data');
    }

    getPromise() {
        return new Promise((resolve, reject) => {
            const headers = new HttpHeaders();
            this.http.get(environment.apiUrl + '/get-data', {headers: headers})
                .subscribe(
                    (response: any) => {
                        resolve(response);
                    },
                    (error: any) => {
                        reject(error);
                    }
                );
        });
    }
}
