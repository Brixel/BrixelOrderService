import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientConfigurationService } from './clientconfiguration.service';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, private clientConfigurationService: ClientConfigurationService) {}

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http
            .get(`${this.clientConfigurationService.getClientConfiguration().apiUri}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http
            .put(`${this.clientConfigurationService.getClientConfiguration().apiUri}${path}`, JSON.stringify(body))
            .pipe(catchError(this.formatErrors));
    }

    post(path: string, body: Object = {}): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http
            .post(`${this.clientConfigurationService.getClientConfiguration().apiUri}${path}`, JSON.stringify(body), httpOptions)
            .pipe(catchError(this.formatErrors));
    }

    delete(path): Observable<any> {
        return this.http
            .delete(`${this.clientConfigurationService.getClientConfiguration().apiUri}${path}`)
            .pipe(catchError(this.formatErrors));
    }
}
