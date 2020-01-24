import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// In Jason's file, it was
// import { environment } from '@environments/environment';
// However, that line does not work.
// https://github.com/angular/universal/issues/734
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        // return this.http.get<any[]>(`${config.apiUrl}/users`);
        return this.http.get<any[]>(`${environment.apiUrl}/users`);
    }

    register(user) {
        // return this.http.post(`${config.apiUrl}/users/register`, user);
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    delete(id) {
        // return this.http.delete(`${config.apiUrl}/users/${id}`);
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
