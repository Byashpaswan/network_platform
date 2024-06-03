import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) 
      { }
  
   baseUrl = 'http://localhost:3000';

    login(userData: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/login`, userData);
    }
  }
