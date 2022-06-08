import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url = 'http://localhost:4000/contact'
  constructor(private http:HttpClient) { }
  getMessages(){
    return this.http.get<any>(this.url)
    
  }
}
