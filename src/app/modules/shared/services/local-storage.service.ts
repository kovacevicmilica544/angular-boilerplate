import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  setUser(user: User, token: string) {
    this.saveToken(token);
    this.saveUser(user);
  }

  logoutUser() {
    localStorage.clear();
  }
}
