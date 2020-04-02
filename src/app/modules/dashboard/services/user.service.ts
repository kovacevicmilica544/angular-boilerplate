import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable()
export class UserService {

    private API_URL = `${environment.apiUrl}`;

    constructor(
        private http: HttpClient
    ) { }

    public getUser(id: any): Observable<any> {
        return this.http.get(`${this.API_URL}/user/${id}`);
    }

}
