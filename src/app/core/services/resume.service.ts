import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private baseUrl = 'http://localhost:8080/api/v1/';  

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'user');  
  }  
}
