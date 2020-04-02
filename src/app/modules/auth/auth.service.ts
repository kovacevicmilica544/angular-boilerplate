import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../shared/services/local-storage.service';

const httpOptionsWithJSON = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable()
export class AuthService {

    private API_URL = `${environment.apiUrl}`;

    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService
    ) { }

    public signUp(data: any): Observable<any> {
        return this.http.post(`${this.API_URL}/auth/sign-up`, data, httpOptionsWithJSON);
    }

    public signIn(data: any): Observable<any> {
        return this.http.post(`${this.API_URL}/auth/sign-in`, data, httpOptionsWithJSON);
    }

    public async logout() {
        this.localStorageService.logoutUser();
    }
}
