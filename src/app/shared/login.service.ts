import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getLoginFromApi(userDetails: Login){
    return this.httpClient.post(environment.apiUrlLogin + '/api/login', userDetails);
  }
}
