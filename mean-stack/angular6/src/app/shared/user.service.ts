import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullname  : "",
    username   : "",
    email     : "",
    password  : "",
    nohp      : "",
    alamat: ""
  }

  constructor(private http: HttpClient) {

  }
  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register',user)
  }
}
